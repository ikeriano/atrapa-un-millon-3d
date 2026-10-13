// «Mi cabecera 3D» para Atrapa un millón 3D: recrea el vídeo del usuario en el plató (cámara, rótulos, logo, audio)
(function () {
  if (!window.MC3D) return;
  const A = () => window.__aum;
  function T3() { // clases de three.js sacadas del propio plató (el juego va minificado)
    const S = A().S.scene; let mesh = null, plane = null, basic = null, grp = null;
    S.traverse(o => { if (o.isMesh && !mesh) mesh = o; if (o.isMesh && o.geometry && o.geometry.type === 'PlaneGeometry' && !plane) plane = o.geometry; if (o.material && o.material.isMeshBasicMaterial && !basic) basic = o.material; if (o.isGroup && !grp) grp = o; });
    const tex = A().S.screenTex;
    return { Vector3: A().cam.pos.constructor, Mesh: mesh.constructor, PlaneGeometry: plane ? plane.constructor : null, MeshBasicMaterial: basic.constructor, CanvasTexture: tex.constructor, Group: grp ? grp.constructor : S.constructor.__proto__, DoubleSide: 2 };
  }
  MC3D.config({ app: 'atrapaunmillon', nombre: 'Atrapa un millón', titulo: 'Atrapa un millón', hashtagDef: '#AtrapaUnMillón', logo: () => 'assets/img/logo_menu.webp', sintonia: 'assets/snd/abertura.mp3',
    palabrasLogo: ['atrapa', 'millon', 'millón'], creditos: () => ['Juego creado por Iker Rodriguez Tejedor', 'Presentador virtual', 'Formato original: Atrapa un millón'],
    recrear: (pl, op) => { const a = A(), q = a.cam, T = T3(), V0 = v => [v.x, v.y, v.z]; let propia = !op.ctx, lerp0 = q.lerp, modo0 = q.mode;
      const cam = { position: q.tPos, lookAt() { }, updateMatrixWorld() { } };
      return MC3D.recrearGenerico({ THREE: T, scene: a.S.scene, camera: cam, mira: q.tLook, centro: [0, 1.6, -1], radio: 10, altura: 4.2, texto: 'Atrapa un millón',
        concursantes: () => (a.pair || []).map(f => V0(f.position)), presentador: () => V0(a.host.position), publico: () => [[-9, 3, 2], [9, 3, 2], [0, 4, 9]],
        logo: [[0, 4.4, -6.5], [0, 4.4, -9]], logoCam: [[0, 3.4, 5], [0, 4.4, -6.5]],
        antes: () => { if (propia) { document.getElementById('menu').classList.add('hidden'); document.getElementById('overlay').classList.add('hidden'); } },
        toma: () => { q.mode = 'show'; q.lerp = 1e6; }, suelta: () => { q.lerp = lerp0; },
        despues: () => { if (propia) a.goMenu(); } })(pl, op); } });
  // Personalizar › fila «Mi cabecera 3D»
  new MutationObserver(() => { const ov = document.getElementById('overlay'), p = ov && ov.querySelector('.panel'); if (p && p.querySelector('#cPair') && !p.querySelector('#rowMiCabecera3D')) { const f = MC3D.fila({ style: 'display:flex;gap:8px;align-items:center;margin:8px 0', btnClass: 'ov-btn' }); const h = p.querySelector('h3'); h.after(f); } }).observe(document.body, { childList: true, subtree: true });
})();
