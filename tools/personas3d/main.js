// Personas 3D para Atrapa un millón 3D (Personalizar › Personajes: Monigotes / Personas 3D)
// Los monigotes del juego siguen moviéndose igual (brazos, piernas, cabeza, boca); en modo «Personas 3D» se ocultan
// y una persona realista (Rocketbox, MIT, caras inventadas) copia sus movimientos. El público se sustituye por
// personas sentadas instanciadas con poses horneadas (aplauso / brazos arriba) que siguen las reacciones del juego.
import * as THREE from 'three';
import { p3dRB } from './personas3d_rb.js';
const ON = (() => { try { return localStorage.getItem('personajes3d') === 'personas'; } catch (e) { return false; } })();
const VERSION = '1.3';
const PT = () => (document.documentElement.lang || '').startsWith('pt') || /PORTUGU/.test(document.querySelector('#btnLang')?.dataset.cur || '');
// ---------- versión en el menú ----------
function ponVersion() { const f = document.querySelector('#menu .menuFoot'); if (f && !f.querySelector('.mver')) { const v = document.createElement('div'); v.className = 'mver'; v.textContent = 'v' + VERSION; v.style.cssText = 'opacity:.7;font-size:12px;margin-top:6px;text-align:center'; f.appendChild(v); } }
// ---------- fila de Personalizar ----------
function ponFila() {
  const ov = document.getElementById('overlay'), q = ov && ov.querySelector('#cQual'); if (!q || ov.querySelector('#rowPersonajes')) return;
  const lab = q.closest('label'), l = document.createElement('label'); l.id = 'rowPersonajes';
  const pt = /Qualidade|Personalizar o/.test(ov.textContent) && !/Calidad/.test(ov.textContent);
  l.append(document.createTextNode((pt ? '🧑 Personagens' : '🧑 Personajes') + ': '));
  const s = document.createElement('select'); s.id = 'cPersonajes';
  [['monigotes', pt ? 'Bonecos' : 'Monigotes'], ['personas', pt ? 'Pessoas 3D' : 'Personas 3D']].forEach(([v, t]) => { const o = document.createElement('option'); o.value = v; o.textContent = t; if ((ON ? 'personas' : 'monigotes') === v) o.selected = true; s.appendChild(o); });
  s.onchange = () => { try { localStorage.setItem('personajes3d', s.value); sessionStorage.setItem('volverOpc', '1'); } catch (e) { } location.reload(); };
  l.appendChild(s); lab.after(l);
}
new MutationObserver(() => { ponVersion(); ponFila(); }).observe(document.documentElement, { childList: true, subtree: true });
ponVersion();
try { if (sessionStorage.getItem('volverOpc')) { sessionStorage.removeItem('volverOpc'); const t0 = Date.now(), iv = setInterval(() => { const b = document.getElementById('btnCustom'), m = document.getElementById('menu'); if (b && m && !m.classList.contains('hidden') && m.offsetParent !== null) { clearInterval(iv); setTimeout(() => b.click(), 300); } else if (Date.now() - t0 > 20000) clearInterval(iv); }, 300); } } catch (e) { }
// ---------- personas ----------
if (ON) {
  const api = p3dRB(THREE, 'personas3d/'), MAP = new Map(), HAB = new Map();
  api.setHabla(h => { const m = HAB.get(h); return !!(m && m.scale.y > 1.05); });
  const hash = s => { let h = 7; s = String(s); for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return Math.abs(h); };
  function convierte(g, a) {
    const u = g.userData; let fem = false, col = '';
    u.head.children.forEach(c => { const p = c.geometry && c.geometry.parameters; if (p && p.thetaLength > 2.2 && p.radius > 0.18) fem = true; });
    g.children.forEach(c => { if (c.material && c.material.color) col += c.material.color.getHexString(); });
    const host = g === a.host, seed = host ? 'presentador' : (u.name || col);
    const f = api.persona(host ? { avatar: api.LISTA.presentador, g: 'm', seed } : { g: fem ? 'f' : 'm', seed: 'aum' + hash(seed) });
    const orig = g.children.slice(); orig.forEach(c => { c.visible = false; }); g.add(f.root);
    HAB.set(f.head, u.mouth); MAP.set(g, { f, u, orig });
  }
  function sincroniza() {
    const a = window.__aum; if (!a || !a.S) return;
    const vistos = [a.host, ...(a.pair || [])]; a.S.scene.children.forEach(c => { if (c.isGroup && c.userData && c.userData.legL && c.userData.mouth) vistos.push(c); });
    for (const g of vistos) { if (!g || !g.userData || !g.userData.legL) continue; let e = MAP.get(g); if (!e) { convierte(g, a); e = MAP.get(g); } else if (e.u !== g.userData || e.f.root.parent !== g) { MAP.delete(g); e.orig.forEach(c => { c.visible = true; }); convierte(g, a); e = MAP.get(g); }
      const { f, u } = e; e.orig.forEach(c => { if (c !== f.root) c.visible = false; });
      f.legL.rotation.set(u.legL.rotation.x, 0, 0); f.legR.rotation.set(u.legR.rotation.x, 0, 0);
      f.armL.rotation.set(u.armL.rotation.x, -u.armL.rotation.y, -u.armL.rotation.z); f.armR.rotation.set(u.armR.rotation.x, -u.armR.rotation.y, -u.armR.rotation.z);
      f.head.rotation.set(u.head.rotation.x, u.head.rotation.y, u.head.rotation.z); HAB.set(f.head, u.mouth);
    }
  }
  // público
  let pub = null;
  function montaPublico() {
    const a = window.__aum; if (!a || !a.S) return; const ims = a.S.scene.children.filter(o => o.isInstancedMesh);
    const ti = ims.findIndex(o => o.geometry.type === 'LatheGeometry'); if (ti < 3) return; const seat = ims[ti - 3], torso = ims[ti], armL = ims[ti + 3];
    const ocultar = [ims[ti - 2], ims[ti - 1], ims[ti], ims[ti + 1], ims[ti + 2], ims[ti + 3], ims[ti + 4], ims[ti + 5]].filter(Boolean);
    const n = torso.count, todos = api.todos(), grp = new THREE.Group(); a.S.scene.add(grp); pub = { ocultar, torso, armL, grp, ims: [], seat };
    Promise.all(todos.map(nm => api.bakePublico(nm))).then(bk => {
      const por = todos.map(() => []); for (let i = 0; i < n; i++) por[(i * 7 + 3) % todos.length].push(i);
      por.forEach((l, k) => { if (!l.length) return; const im = new THREE.InstancedMesh(bk[k].geo, new THREE.MeshLambertMaterial({ map: bk[k].atlas, alphaTest: .45, side: THREE.DoubleSide }), l.length); im.morphTargetInfluences = [0, 0, 0, 0]; im.frustumCulled = false; im.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
        l.forEach((_, j) => im.setMorphAt(j, { morphTargetInfluences: [0, 0, 0, 0] })); im.morphTexture.needsUpdate = true; im.userData.idx = l; grp.add(im); pub.ims.push(im); });
      pub.listo = true;
    }).catch(e => console.warn('[p3d público]', e));
  }
  const M = new THREE.Matrix4(), MA = new THREE.Matrix4(), OFF = new THREE.Matrix4().makeTranslation(0, -0.5, 0.03), yT = new THREE.Vector3(), yA = new THREE.Vector3(), inf = { morphTargetInfluences: [0, 0, 0, 0] };
  function animaPublico(t) {
    if (!pub) return montaPublico(); pub.ocultar.forEach(o => { o.visible = false; }); if (!pub.listo) return;
    pub.grp.visible = pub.seat.visible;
    for (const im of pub.ims) { const idx = im.userData.idx;
      for (let j = 0; j < idx.length; j++) { const i = idx[j]; pub.torso.getMatrixAt(i, M); pub.armL.getMatrixAt(i, MA);
        yT.setFromMatrixColumn(M, 1).normalize(); yA.setFromMatrixColumn(MA, 1).normalize(); const d = yT.dot(yA); // reposo ≈ .94, aplauso ≈ .2, arriba ≈ -.9
        const up = Math.min(1, Math.max(0, (0.0 - d) / 0.7)), cl = up > 0 ? Math.max(0, 1 - up * 1.5) : Math.min(1, Math.max(0, (0.9 - d) / 0.55)), osc = Math.sin(t * 17 + i) * .5 + .5;
        inf.morphTargetInfluences[0] = cl * osc; inf.morphTargetInfluences[1] = cl * (1 - osc); inf.morphTargetInfluences[2] = up; inf.morphTargetInfluences[3] = 0;
        im.setMorphAt(j, inf); im.setMatrixAt(j, M.multiply(OFF)); }
      im.instanceMatrix.needsUpdate = true; im.morphTexture.needsUpdate = true; }
  }
  const bucle = () => { requestAnimationFrame(bucle); try { sincroniza(); animaPublico(performance.now() / 1000); } catch (e) { console.warn('[p3d]', e); } };
  requestAnimationFrame(bucle);
  window.__aumP3D = { MAP, get pub() { return pub; } };
}
