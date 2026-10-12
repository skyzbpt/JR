/* JR 智庫離線快取：有網路時抓最新版並順手存起來；沒網路或網路太慢時，用上次存下的版本 */
const CACHE = "jr-v1";
const CORE = ["./", "index.html", "manifest.webmanifest", "assets/logo.png", "assets/favicon.png", "assets/icon-192.png", "assets/icon-512.png"];
const SLOW_MS = 3500;

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE)
    .then(c => Promise.all(CORE.map(u => c.add(u).catch(() => {}))))
    .then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

function fromNet(req) {
  return fetch(req).then(res => {
    if (res.ok && res.type === "basic") {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(req, copy));
    }
    return res;
  });
}

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  const net = fromNet(req);
  const cached = caches.match(req, { ignoreSearch: true })
    .then(m => m || (req.mode === "navigate" ? caches.match("index.html") : undefined));
  e.respondWith(new Promise(resolve => {
    let done = false;
    const finish = r => { if (!done) { done = true; clearTimeout(timer); resolve(r); } };
    /* 網路太慢（活動現場常見）就先給快取，網路回來後下次開啟就是新版 */
    const timer = setTimeout(() => cached.then(m => { if (m) finish(m); }), SLOW_MS);
    net.then(finish).catch(() => cached.then(m => finish(m || Response.error())));
  }));
  e.waitUntil(net.catch(() => {}));
});
