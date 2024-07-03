const CACHE_NAME = 'my-cache-v1';
const urlsToCache = [
  '/index.html',
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );

  self.skipWaiting();
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.match(event.request)
          .then(function(response) {
            // Return response from cache if found
            if (response) {
              return response;
            }

            // Clone the request as it can only be consumed once
            const fetchRequest = event.request.clone();

            return fetch(fetchRequest)
              .then(function(networkResponse) {
                // Check if we received a valid response
                if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                  return networkResponse; // Return original response which may be undefined
                }

                // Clone the response as it can only be consumed once
                var responseToCache = networkResponse.clone();

                caches.open(CACHE_NAME)
                  .then(function(cache) {
                    cache.put(event.request, responseToCache);
                  });

                return networkResponse;
              })
              .catch(function(error) {
                // Handle fetch errors gracefully
                console.error('Fetch failed:', error);
                throw error;
              });
          });
      })
  );
});

// self.addEventListener('activate', function(event) {
//   const cacheWhitelist = [CACHE_NAME];

//   event.waitUntil(
//     caches.keys().then(function(keyList) {
//       return Promise.all(keyList.map(function(key) {
//         if (cacheWhitelist.indexOf(key) === -1) {
//           return caches.delete(key); // Delete old caches not in whitelist
//         }
//       }));
//     })
//   );

//   self.clients.claim();
// });
