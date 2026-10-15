// Personas 3D para Atrapa un millón 3D (Personalizar › Personajes: Monigotes / Personas 3D)
// Los monigotes del juego siguen moviéndose igual (brazos, piernas, cabeza, boca); en modo «Personas 3D» se ocultan
// y una persona realista (Rocketbox, MIT, caras inventadas) copia sus movimientos. El público se sustituye por
// personas sentadas instanciadas con poses horneadas (aplauso / brazos arriba) que siguen las reacciones del juego.
const ON = (() => { try { return localStorage.getItem('personajes3d') === 'personas'; } catch (e) { return false; } })();
const VERSION = '1.5';
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
// ---------- personas: el motor (three + avatares) solo se carga si se eligió «Personas 3D», tarde y sin bloquear ----------
if (ON) {
  const carga = () => { const s = document.createElement('script'); s.src = 'personas3d_motor.js?v=' + VERSION; s.async = true; s.onerror = () => console.warn('[p3d] motor no cargado: se quedan los monigotes'); document.body.appendChild(s); };
  const espera = () => { if (window.__aum && window.__aum.S) { (window.requestIdleCallback || setTimeout)(carga, { timeout: 3000 }); } else setTimeout(espera, 500); };
  if (document.readyState === 'complete') setTimeout(espera, 1500); else window.addEventListener('load', () => setTimeout(espera, 1500));
}
