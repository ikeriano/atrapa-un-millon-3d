/* 1.7: detecta GPUs modestas (PowerVR, Mali-G52 y similares) para arrancar en «Ultra ligero». */
(()=>{try{const c=document.createElement('canvas'),g=c.getContext('webgl',{powerPreference:'low-power'});if(!g)return;
 const x=g.getExtension('WEBGL_debug_renderer_info'),r=x?g.getParameter(x.UNMASKED_RENDERER_WEBGL):g.getParameter(g.RENDERER);window.__gpu=r;
 window.__gpuDebil=/PowerVR|Mali-(G5[0-7]|G3|G6[0-8]|T|4)|Adreno \(TM\) [3-5]\d\d|Adreno \(TM\) 6[01]\d|SwiftShader|llvmpipe/i.test(r||'');
 const l=g.getExtension('WEBGL_lose_context');l&&l.loseContext()}catch(e){}})();
