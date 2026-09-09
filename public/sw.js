// RakshaCast Service Worker for Background Web Push & Offline Resilience
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

// Handle Background Push Notifications
self.addEventListener('push', (event) => {
    let payload = {
        title: '🚨 RAKSHACAST DISASTER ALERT',
        body: 'Immediate emergency advisory issued for your sector.',
        icon: 'https://img.icons8.com/fluency/192/shield.png',
        badge: 'https://img.icons8.com/fluency/96/shield.png',
        tag: 'rakshacast-alert-' + Date.now(),
        requireInteraction: true,
        vibrate: [300, 100, 300, 100, 300],
        data: { url: '/' }
    };

    if (event.data) {
        try {
            const data = event.data.json();
            payload.title = data.title || payload.title;
            payload.body = data.body || payload.body;
            payload.tag = data.tag || payload.tag;
            if (data.data) payload.data = data.data;
        } catch(e) {
            payload.body = event.data.text();
        }
    }

    event.waitUntil(
        self.registration.showNotification(payload.title, {
            body: payload.body,
            icon: payload.icon,
            badge: payload.badge,
            tag: payload.tag,
            vibrate: payload.vibrate,
            requireInteraction: payload.requireInteraction,
            data: payload.data
        })
    );
});

// Open application when notification is clicked
self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
            for (const client of clientList) {
                if (client.url && 'focus' in client) {
                    return client.focus();
                }
            }
            if (clients.openWindow) {
                return clients.openWindow('/');
            }
        })
    );
});