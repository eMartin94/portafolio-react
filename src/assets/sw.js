self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }

      // Si la solicitud no se encuentra en la caché, intenta buscarla en la red
      return fetch(event.request).then(function (networkResponse) {
        // Si la solicitud es para un recurso de la carpeta "assets", colócala en la caché
        if (event.request.url.includes('/assets/')) {
          caches.open('assets-cache').then(function (cache) {
            cache.put(event.request.url, networkResponse.clone());
          });
        }

        // Devuelve la respuesta de la red
        return networkResponse;
      });
    })
  );
});
