// File: authController.js

const path = require('path');
const {getTokens} = require('./authService');
const {handleAuthError} = require('./authUtils');


async function handleAuth (req, res) {
	const { code, state } = req.query;
	const authorization_code = code;
	const telegram_id = state;
	
	console.log(`Получили код авторизации ${authorization_code}`);
	console.log(`Получили секрет ${telegram_id}`);
	
	if (handleAuthError(res, authorization_code, telegram_id)) {
		return;
	}
	
	res.sendFile(path.join(__dirname, 'redirect.html'));
	
	try {
		const tokens = await getTokens(authorization_code, telegram_id);
		console.log(`Получили токены ${tokens}`);
	} catch (error) {
		console.error('Ошибка при получении токенов:', error.response.data);
	}
}

module.exports = {
	handleAuth
};