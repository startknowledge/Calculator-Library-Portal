const CACHE_NAME = "calculator-pwa-v1";
const ASSETS = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js"
  "/manifest.json"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
self.addEventListener("activate", e => {
  const cacheWhitelist = [CACHE_NAME];
  e.waitUntil(
    caches.keys().then(keyList =>
      Promise.all(
        keyList.map(key => {
          if (!cacheWhitelist.includes(key)) {
            return caches.delete(key);
          }
        })
      )
    )
  );
});
