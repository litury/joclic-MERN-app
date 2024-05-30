import Pusher from 'pusher-js';

const pusherKey = import.meta.env.VITE_PUSHER_KEY;
const pusherCluster = import.meta.env.VITE_PUSHER_CLUSTER;

if (!pusherKey || !pusherCluster) {
    throw new Error('Variables not defined');
}

const pusher = new Pusher(
    pusherKey,
    {
    cluster: pusherCluster
});

export default pusher;
