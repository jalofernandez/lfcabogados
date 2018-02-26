var CACHE_NAME = 'lfcabogados-cache';
var urlsToCache = [
    '/',
    '/index.html',
    '/css/main.css',
    '/js/jquery.min.js',
    '/js/jquery.easing.min.js',
    '/js/bootstrap.min.js',
    '/js/less.min.js',
    '/js/otherscripts.js',
    '/img/common/lfc_logo.svg',
    '/img/header/header-bg.jpg'
];

self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
