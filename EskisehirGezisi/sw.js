/*self.addEventListener('install', e => console.log('pwa installed.'));
self.addEventListener('fetch', event => {}); // şimdilik bir şey yapmaya gerek yok*/



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


