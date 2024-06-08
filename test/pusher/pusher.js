// Filename: pusher.js
const Pusher = require('pusher');
require('dotenv').config();
const pusherAppId = process.env.PUSHER_APP_ID;
const pusherKey = process.env.PUSHER_KEY;
const pusherSecret = process.env.PUSHER_SECRET;
const pusherCluster = process.env.PUSHER_CLUSTER;

if (!pusherAppId || !pusherKey || !pusherSecret || !pusherCluster) {
	console.error('Одна или несколько переменных окружения Pusher не определены:');
	console.error('PUSHER_APP_ID:', pusherAppId);
	console.error('PUSHER_KEY:', pusherKey);
	console.error('PUSHER_SECRET:', pusherSecret);
	console.error('PUSHER_CLUSTER:', pusherCluster);
}

const pusher = new Pusher({
	appId: pusherAppId,
	key: pusherKey,
	secret: pusherSecret,
	cluster: pusherCluster,
	useTLS: true
});

exports.authSuccess = (telegram_id, message) => {
	pusher.trigger(`auth-channel-${telegram_id}`, 'auth-success', {
		status: 'success',
		message: message,
	})
		.catch(error => {
			console.error('Ошибка при отправке уведомления об успешной авторизации:', error);
		});
};

exports.authError = (telegram_id, message) => {
	pusher.trigger(`auth-channel-${telegram_id}`, 'auth-error', {
		status: 'error',
		message: message,
	})
		.catch(error => {
			console.error('Ошибка при отправке уведомления об ошибке авторизации:', error);
		});
};

exports.pusher = pusher;