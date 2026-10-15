// Motor de «Personas 3D» (se carga solo si está elegido). Todo es asíncrono y por partes; si algo falla, vuelven los monigotes.
import * as THREE from 'three';
import { p3dRB } from './personas3d_rb.js';
(function () {
  const api = p3dRB(THREE, 'personas3d/'), MAP = new Map(), HAB = new Map(); let roto = false;
  api.setHabla(h => { const m = HAB.get(h); return !!(m && m.scale.y > 1.05); });
  const hash = s => { let h = 7; s = String(s); for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return Math.abs(h); };
  const nap = ms => new Promise(r => setTimeout(r, ms));
  function convierte(g, a) {
    const u = g.userData; let fem = false, col = '';
    u.head.children.forEach(c => { const p = c.geometry && c.geometry.parameters; if (p && p.thetaLength > 2.2 && p.radius > 0.18) fem = true; });
    g.children.forEach(c => { if (c.material && c.material.color) col += c.material.color.getHexString(); });
    const host = g === a.host, seed = host ? 'presentador' : (u.name || col);
    const f = api.persona(host ? { avatar: api.LISTA.presentador, g: 'm', seed } : { g: fem ? 'f' : 'm', seed: 'aum' + hash(seed) });
    f.root.visible = false; // hasta que el avatar esté cargado se sigue viendo el monigote
    const orig = g.children.slice(); g.add(f.root); HAB.set(f.head, u.mouth); MAP.set(g, { f, u, orig, t0: performance.now() });
  }
  function restaura(e, g) { e.orig.forEach(c => { c.visible = true; }); if (e.f.root.parent) e.f.root.parent.remove(e.f.root); }
  function sincroniza() {
    const a = window.__aum; if (!a || !a.S) return;
    const vistos = [a.host, ...(a.pair || [])]; a.S.scene.children.forEach(c => { if (c.isGroup && c.userData && c.userData.legL && c.userData.mouth) vistos.push(c); });
    for (const g of vistos) {
      if (!g || !g.userData || !g.userData.legL) continue; let e = MAP.get(g);
      if (!e) { convierte(g, a); e = MAP.get(g); } else if (e.u !== g.userData || (e.f.root.parent !== g && !e.fallo)) { restaura(e); MAP.delete(g); convierte(g, a); e = MAP.get(g); }
      if (e.fallo) continue; const { f, u } = e;
      if (!f.p3d.listo) { if (performance.now() - e.t0 > 20000) { e.fallo = true; restaura(e); } continue; } // no cargó: monigote
      f.root.visible = true; e.orig.forEach(c => { if (c !== f.root) c.visible = false; });
      f.legL.rotation.set(u.legL.rotation.x, 0, 0); f.legR.rotation.set(u.legR.rotation.x, 0, 0);
      f.armL.rotation.set(u.armL.rotation.x, -u.armL.rotation.y, -u.armL.rotation.z); f.armR.rotation.set(u.armR.rotation.x, -u.armR.rotation.y, -u.armR.rotation.z);
      f.head.rotation.set(u.head.rotation.x, u.head.rotation.y, u.head.rotation.z); HAB.set(f.head, u.mouth);
    }
  }
  // público: pocas caras distintas (memoria), horneadas de una en una cediendo el hilo entre medias
  let pub = null;
  async function montaPublico() {
    const a = window.__aum, ims = a.S.scene.children.filter(o => o.isInstancedMesh);
    const ti = ims.findIndex(o => o.geometry.type === 'LatheGeometry'); if (ti < 3) { pub = false; return; }
    const seat = ims[ti - 3], torso = ims[ti], armL = ims[ti + 3], ocultar = ims.slice(ti - 2, ti + 6);
    pub = { ocultar, torso, armL, seat, ims: [], listo: false };
    const L = api.LISTA, todos = [...L.m.slice(0, 5), ...L.f.slice(0, 5)], bk = [];
    for (const nm of todos) { await nap(120); try { bk.push(await api.bakePublico(nm)); } catch (e) { console.warn('[p3d público]', nm, e); } }
    if (!bk.length) { pub = false; return; }
    const n = torso.count, por = bk.map(() => []), grp = new THREE.Group(); for (let i = 0; i < n; i++) por[(i * 7 + 3) % bk.length].push(i);
    por.forEach((l, k) => { if (!l.length) return; const im = new THREE.InstancedMesh(bk[k].geo, new THREE.MeshLambertMaterial({ map: bk[k].atlas, alphaTest: .45, side: THREE.DoubleSide }), l.length); im.morphTargetInfluences = [0, 0, 0, 0]; im.frustumCulled = false; im.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      l.forEach((_, j) => im.setMorphAt(j, { morphTargetInfluences: [0, 0, 0, 0] })); im.morphTexture.needsUpdate = true; im.userData.idx = l; grp.add(im); pub.ims.push(im); });
    pub.grp = grp; a.S.scene.add(grp); pub.listo = true;
  }
  const M = new THREE.Matrix4(), MA = new THREE.Matrix4(), OFF = new THREE.Matrix4().makeTranslation(0, -0.5, 0.03), yT = new THREE.Vector3(), yA = new THREE.Vector3(), inf = { morphTargetInfluences: [0, 0, 0, 0] };
  let cuadro = 0;
  function animaPublico(t) {
    if (pub === false) return; if (!pub) { pub = 1; montaPublico().catch(e => { console.warn('[p3d público]', e); pub = false; }); return; }
    if (!pub.listo) return; pub.ocultar.forEach(o => { o.visible = false; }); pub.grp.visible = pub.seat.visible;
    if (!pub.seat.visible || (cuadro++ & 1)) return; // a medio ritmo: suficiente para aplausos
    for (const im of pub.ims) { const idx = im.userData.idx;
      for (let j = 0; j < idx.length; j++) { const i = idx[j]; pub.torso.getMatrixAt(i, M); pub.armL.getMatrixAt(i, MA);
        yT.setFromMatrixColumn(M, 1).normalize(); yA.setFromMatrixColumn(MA, 1).normalize(); const d = yT.dot(yA);
        const up = Math.min(1, Math.max(0, -d / 0.7)), cl = up > 0 ? Math.max(0, 1 - up * 1.5) : Math.min(1, Math.max(0, (0.9 - d) / 0.55)), osc = Math.sin(t * 17 + i) * .5 + .5;
        inf.morphTargetInfluences[0] = cl * osc; inf.morphTargetInfluences[1] = cl * (1 - osc); inf.morphTargetInfluences[2] = up; inf.morphTargetInfluences[3] = 0;
        im.setMorphAt(j, inf); im.setMatrixAt(j, M.multiply(OFF)); }
      im.instanceMatrix.needsUpdate = true; im.morphTexture.needsUpdate = true; }
  }
  function abandona(e) { // fallo grave: todo vuelve a monigotes
    roto = true; console.warn('[p3d] desactivado, vuelven los monigotes', e);
    MAP.forEach((x, g) => restaura(x, g)); if (pub && pub.ocultar) { pub.ocultar.forEach(o => { o.visible = true; }); if (pub.grp && pub.grp.parent) pub.grp.parent.remove(pub.grp); } pub = false;
  }
  // vigilante: si con las personas el juego va a tirones fuertes (< 6 FPS durante 4 s seguidos), vuelven los monigotes
  let tPrev = 0, lentos = 0;
  const bucle = () => { if (roto) return; requestAnimationFrame(bucle); const now = performance.now();
    if (tPrev && !document.hidden && !window.P3D_SIN_VIGILANTE) { const dt = now - tPrev; lentos = dt > 166 ? lentos + dt : 0; if (lentos > 4000) return abandona('demasiado lento'); } tPrev = now;
    try { sincroniza(); animaPublico(now / 1000); } catch (e) { abandona(e); } };
  document.addEventListener('visibilitychange', () => { tPrev = 0; lentos = 0; });
  requestAnimationFrame(bucle);
  window.__aumP3D = { MAP, get pub() { return pub; } };
})();
