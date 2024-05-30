import Pusher from 'pusher-js';

const pusherKey = process.env.REACT_APP_PUSHER_KEY;
const pusherCluster = process.env.REACT_APP_PUSHER_CLUSTER;

if (!pusherKey || !pusherCluster) {
    throw new Error('Variables not defined');
}

const pusher = new Pusher(
    pusherKey,
    {
    cluster: pusherCluster
});

export default pusher;
