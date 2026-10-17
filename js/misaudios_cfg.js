// Atrapa un millón 3D: fila en «⚙ Personalizar» (debajo de «Mi cabecera 3D»); las claves de voz del juego (h_*, c*, r_*, pa*, cheer*) se pasan a momentos
(function () {
  var P = {
    saludo: /^(intro1|intro2d?x?|introAniv|introTele|open1?)$/, pareja: /^(pair|comp)$/, reglas: /^(rules|money|go|topics)$/, pregunta: /^p\d$/, seguro: /^(sure\d|allIn|empty)$/,
    tiempo: /^(t30|t10|timeUp|stop)$/, salva: /^(correctIs|safe|safeAll)$/, pierde: /^(lostSome|lostAll|unplaced)$/, final: /^(round3|final|finChoice|finClassic|finDouble|finTriple)$/,
    gana: /^win$/, broma: /^(j\d|star)$/, despedida: /^outro$/
  };
  window.__maAt = function (k) {
    try { if (!window.MisAudios || !k) return null; var m;
      if ((m = /^h_(.+)$/.exec(k))) { for (var mom in P) if (P[mom].test(m[1])) return MisAudios.evento(mom, 'pres'); return null; }
      if (/^pa\d/.test(k)) return MisAudios.evento('presenta', 'conc');
      if (/^c\d+[FM]$/.test(k)) return MisAudios.evento('charla', 'conc');
      if ((m = /^r_(yes|no|wow)/.exec(k))) return MisAudios.evento(m[1] === 'yes' ? 'si' : m[1] === 'no' ? 'no' : 'wow', 'conc');
      if (/^cheer/.test(k)) return MisAudios.evento('anima', 'acomp');
    } catch (e) { } return null;
  };
})();
window.MIS_AUDIOS_CFG = {
  juego: 'atrapa', titulo: 'Atrapa un millón 3D',
  anclar: function () { var ov = document.getElementById('overlay'), p = ov && ov.querySelector('.panel'); return p && p.querySelector('#cPair') ? p : null; },
  insertar: function (a, fila) { var r = a.querySelector('#rowMiCabecera3D') || a.querySelector('h3'); if (r) r.after(fila); else a.prepend(fila); },
  crearBoton: function (txt, abrir) { var r = document.createElement('div'); r.style.cssText = 'display:flex;gap:8px;align-items:center;margin:8px 0'; r.appendChild(document.createTextNode('🎤 Mis audios (pon tus propios audios a los personajes)')); var b = document.createElement('button'); b.className = 'ov-btn maBoton'; b.type = 'button'; b.textContent = txt; b.onclick = function (ev) { ev.stopPropagation(); ev.preventDefault(); abrir(); }; r.appendChild(b); return r; },
  etiqueta: function (n) { return n ? 'Abrir (' + n + ' momentos)' : 'Abrir'; },
  personajes: [
    { id: 'pres', nombre: '🎙️ Presentador', momentos: [['saludo', '👋 Bienvenida'], ['pareja', '👫 Presenta a la pareja y acompañantes'], ['reglas', '📜 Reglas, el dinero y «elegid tema»'], ['pregunta', '❓ «Pregunta número…»'], ['seguro', '🤔 «¿Estáis seguros?»'], ['tiempo', '⏱️ Tiempo (30 s, 10 s, ¡se acabó!, ¡stop!)'], ['salva', '✅ El dinero se salva'], ['pierde', '🕳️ Caen las trampillas (perdéis dinero)'], ['final', '🏁 Ronda de tres / pregunta final'], ['gana', '💰 ¡Os lo lleváis!'], ['broma', '😄 Bromas del presentador'], ['despedida', '👋 Despedida']] },
    { id: 'conc', nombre: '👫 Concursantes', momentos: [['presenta', '🙋 Se presentan'], ['charla', '💬 Charla mientras reparten'], ['si', '🙌 ¡Sí! (se salva)'], ['no', '😩 ¡No! (lo pierden)'], ['wow', '😮 ¡Uau!']] },
    { id: 'acomp', nombre: '📣 Acompañantes', momentos: [['anima', '📣 Animan desde la grada']] }
  ],
  texto: [], sfx: []
};
