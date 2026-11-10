/* Cache everything on first open, then run from the cache, so the app works
   with no signal. Only this app's own old caches are cleared on update. */
var V="lesefeed-hegel-20261110-1708";
var SHELL=["./","index.html","jszip.min.js","book.json","dict.json","forms.json","manifest.webmanifest",
           "icon-192.png","icon-512.png","apple-touch-icon.png"];
self.addEventListener("install",function(e){
  e.waitUntil(caches.open(V).then(function(c){return c.addAll(SHELL)}).then(function(){return self.skipWaiting()}));
});
self.addEventListener("activate",function(e){
  e.waitUntil(caches.keys().then(function(ks){
    return Promise.all(ks.filter(function(k){return k!==V && k.indexOf("lesefeed-hegel-")===0}).map(function(k){return caches.delete(k)}));
  }).then(function(){return self.clients.claim()}));
});
self.addEventListener("fetch",function(e){
  if(e.request.method!=="GET") return;
  e.respondWith(caches.match(e.request).then(function(hit){
    return hit || fetch(e.request).then(function(res){
      var copy=res.clone();
      caches.open(V).then(function(c){ try{ c.put(e.request,copy) }catch(err){} });
      return res;
    }).catch(function(){ return caches.match("index.html") });
  }));
});
