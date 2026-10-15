/* Atrapa un millón 3D · Modo clásico (The Million Pound Drop 2014, en español). Solo aparece si existe clasico/ (APK); la web no lo incluye. */
(()=>{
  const add=()=>{const btns=document.querySelector('#menu .btns');if(!btns||document.getElementById('btnClasico'))return;
    const b=document.createElement('button');b.id='btnClasico';const tx=()=>{b.textContent=(document.documentElement.lang||'').startsWith('pt')||localStorage.getItem('lang')==='pt'?'Modo clássico':'Modo clásico'};tx();
    btns.insertBefore(b,document.getElementById('btnCustom'));
    b.onclick=e=>{e.stopPropagation();abrir()}};
  function abrir(){let w=document.getElementById('clasicoWrap');
    if(!w){w=document.createElement('div');w.id='clasicoWrap';w.style.cssText='position:fixed;inset:0;z-index:99999;background:#000';
      w.innerHTML='<iframe id="clasicoFrame" allow="autoplay;fullscreen" style="border:0;width:100%;height:100%"></iframe><button id="clasicoBack" style="position:absolute;left:8px;top:8px;z-index:2;font:600 14px Arial;padding:6px 12px;border-radius:14px;border:1px solid #fff;background:rgba(0,0,0,.6);color:#fff">⟵ Menú</button>';
      document.body.appendChild(w);document.getElementById('clasicoBack').onclick=cerrar}
    w.style.display='block';document.getElementById('clasicoFrame').src='clasico/index.html';try{window.__music&&window.__music.pause()}catch(e){}}
  function cerrar(){const w=document.getElementById('clasicoWrap');if(!w)return;document.getElementById('clasicoFrame').src='about:blank';w.style.display='none'}
  addEventListener('message',e=>{if(e.data==='clasico:salir')cerrar()});
  window.__clasicoAbrir=abrir;
  fetch('clasico/index.html',{method:'HEAD'}).then(r=>{if(r.ok){add();new MutationObserver(add).observe(document.body,{childList:true,subtree:true})}}).catch(()=>{});
})();
