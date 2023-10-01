// src/fetchWorker.js
self.addEventListener('message', (e) => {
    if (!e) return;

    fetch(e.data.url)
        .then(response => response.json())
        .then(data => {
            postMessage(data);
        })
        .catch(error => {
            console.error("Fetching error:", error);
            postMessage(null);
        });
});
