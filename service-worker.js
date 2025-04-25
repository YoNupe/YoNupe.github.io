self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => console.log('SW active'));
self.addEventListener('fetch', e => { /* no-op */ });