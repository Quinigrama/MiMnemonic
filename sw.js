/* Sinapsis Violenta · funciona sin conexión.
   Sirve lo guardado al instante y lo actualiza en segundo plano.
   Cambia VERSION al publicar cambios grandes para forzar una copia nueva. */
const VERSION="sinapsis-v1";
const FILES=["./","index.html","manifest.webmanifest","icons/icon-192.png","icons/icon-512.png","icons/icon-maskable-512.png","icons/apple-touch-icon.png","naipes/01o.jpg","naipes/02o.jpg","naipes/03o.jpg","naipes/04o.jpg","naipes/05o.jpg","naipes/06o.jpg","naipes/07o.jpg","naipes/08o.jpg","naipes/09o.jpg","naipes/10o.jpg","naipes/11o.jpg","naipes/12o.jpg","naipes/01b.jpg","naipes/02b.jpg","naipes/03b.jpg","naipes/04b.jpg","naipes/05b.jpg","naipes/06b.jpg","naipes/07b.jpg","naipes/08b.jpg","naipes/09b.jpg","naipes/10b.jpg","naipes/11b.jpg","naipes/12b.jpg","naipes/01c.jpg","naipes/02c.jpg","naipes/03c.jpg","naipes/04c.jpg","naipes/05c.jpg","naipes/06c.jpg","naipes/07c.jpg","naipes/08c.jpg","naipes/09c.jpg","naipes/10c.jpg","naipes/11c.jpg","naipes/12c.jpg","naipes/01e.jpg","naipes/02e.jpg","naipes/03e.jpg","naipes/04e.jpg","naipes/05e.jpg","naipes/06e.jpg","naipes/07e.jpg","naipes/08e.jpg","naipes/09e.jpg","naipes/10e.jpg","naipes/11e.jpg","naipes/12e.jpg"];
self.addEventListener("install",e=>{
  e.waitUntil(caches.open(VERSION).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));
});
self.addEventListener("activate",e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener("fetch",e=>{
  const req=e.request;
  if(req.method!=="GET"||new URL(req.url).origin!==location.origin)return;
  e.respondWith(caches.open(VERSION).then(async cache=>{
    const hit=await cache.match(req,{ignoreSearch:true});
    const net=fetch(req).then(res=>{if(res.ok)cache.put(req,res.clone());return res}).catch(()=>hit);
    return hit||net;
  }));
});
