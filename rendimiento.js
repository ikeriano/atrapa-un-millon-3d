/* 1.5: rendimiento y toques. Botones al pointerdown, sin retardo de doble toque, y menos fotogramas cuando la escena está quieta tras un menú. */
(()=>{'use strict';
const css=document.createElement('style');
css.textContent='button,[data-a],[data-z],[data-n],[data-mode],[data-tab],.opt,.ans,a{touch-action:manipulation;-webkit-tap-highlight-color:transparent}#wm,#hud,.skip-hint{pointer-events:none}';
document.head.appendChild(css);
let last=performance.now();const toque=()=>{last=performance.now()};
['pointerdown','keydown','wheel','touchstart'].forEach(t=>addEventListener(t,toque,{capture:true,passive:true}));
// Botón a la primera: dispara click en pointerdown y se come el click nativo posterior.
let hecho=null,hechoT=0;
const SEL='button,[data-a],[data-z],[data-n],[data-mode],[data-tab]';
addEventListener('pointerdown',e=>{if(e.button>0)return;const b=e.target.closest&&e.target.closest(SEL);if(!b||b.disabled||b.matches('input,select,textarea,label')||b.closest('.gl-panel,[data-noflash]'))return;
 hecho=b;hechoT=performance.now();b.click()},{capture:true});
addEventListener('click',e=>{if(!hecho)return;if(e.isTrusted&&performance.now()-hechoT<900&&(e.target===hecho||hecho.contains(e.target))){e.stopImmediatePropagation();e.preventDefault();hecho=null}},{capture:true});
// Pausa/limitación del render: oculto o modo clásico → nada; menú quieto → 20 fps; sin tocar 12 s → 30 fps.
let cub=false,ts=0,lastR=0;
function cubre(){const s=[...document.querySelectorAll('.screen')].some(x=>!x.classList.contains('hidden')&&x.offsetParent!==null&&getComputedStyle(x).display!=='none');
 const c=document.getElementById('clasicoWrap');return{menu:s,clasico:!!(c&&c.offsetParent!==null&&getComputedStyle(c).display!=='none')}}
window.__p3dSkip=function(){const now=performance.now();if(document.hidden)return true;
 if(now-ts>400){ts=now;cub=cubre()}if(cub.clasico)return true;
 const idle=now-last>12000,cap=cub.menu&&now-last>1500?50:idle?33:0;
 if(cap&&now-lastR<cap-2)return true;lastR=now;return false};
})();
