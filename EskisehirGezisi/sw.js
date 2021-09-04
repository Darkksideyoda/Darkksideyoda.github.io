/*self.addEventListener('install', e => console.log('pwa installed.'));
self.addEventListener('fetch', event => {}); // şimdilik bir şey yapmaya gerek yok*/


/*
// service-worker.js
self.addEventListener('install', function () {
    console.log('Install!');
});
self.addEventListener("activate", event => {
    console.log('Activate!');
});
self.addEventListener('fetch', function (event) {
    console.log('Fetch!', event.request);
});
*/

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});


