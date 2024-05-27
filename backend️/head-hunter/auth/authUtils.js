const pusher = require('../../../pusher/pusher');

function handleAuthError(res, authorization_code, telegram_id) {
	
	if (!authorization_code || !telegram_id) {
		res.status(400).send('Authorization code not found');
		pusher.authError(telegram_id, 'Ошибка авторизации');
		console.log('Ошибка авторизации');
		return true;
	}
	return false;
}

module.exports = {
	handleAuthError
};