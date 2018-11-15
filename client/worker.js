console.log('Service Worker Loaded...')

self.addEventListener('push',e => {
    const data = e.data.json();
    console.log('Push Recieved...');
    self.registration.showNotification(data.title, {
        body: 'Notified by Kegen Guyll',
        icon: 'https://img.icons8.com/color/50/ecf0f1/yoda.png'
    });
})