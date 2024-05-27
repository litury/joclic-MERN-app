import Pusher from 'pusher-js';

// Создаем экземпляр Pusher с настройками
const pusher = new Pusher('948e95414d9c598ae01e', {
    cluster: 'eu'
});

export default pusher;
