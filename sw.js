self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }
      return fetch(event.request).then(function (networkResponse) {
        if (event.request.url.includes('/assets/')) {
          if (event.request.url.includes('/assets/skills/')) {
            caches.open('skills-cache').then(function (cache) {
              cache.put(event.request.url, networkResponse.clone());
            });
          } else if (event.request.url.includes('/assets/company/')) {
            caches.open('company-cache').then(function (cache) {
              cache.put(event.request.url, networkResponse.clone());
            });
          } else {
            caches.open('assets-cache').then(function (cache) {
              cache.put(event.request.url, networkResponse.clone());
            });
          }
        }
        return networkResponse;
      });
    })
  );
});

