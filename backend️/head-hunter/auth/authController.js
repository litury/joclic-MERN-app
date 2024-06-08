// File: authController.js

const path = require('path');
const {getTokens, checkAuthorization} = require('./authService');
const {handleAuthError} = require('./authUtils');
const pusher = require('../../pusher/pusher');
const {upsertAccount} = require('../../db/accounts-model');

async function handleAuth(req, res) {
	const {code, state} = req.query;
	const authorization_code = code;
	const telegram_id = state;
	
	console.log(`Получили код авторизации ${authorization_code}`);
	console.log(`Получили секрет ${telegram_id}`);
	
	if (handleAuthError(res, authorization_code, telegram_id)) {
		return;
	}
	
	try {
		const tokens = await getTokens(authorization_code, telegram_id);
		
		if (tokens) {
			console.log('Успешная авторизация');
			
			const newAccountData = {
				accessToken: tokens.access_token,
				tokenType: tokens.token_type,
				refreshToken: tokens.refresh_token,
				expiresIn: tokens.expires_in,
				tokenUpdateDate: new Date() // Обновляем дату обновления токена
			};
			
			await upsertAccount(telegram_id, newAccountData);
			console.log('Успешно добавили аккаунт в базу данных');
			
			pusher.authSuccess(telegram_id, 'Удачная авторизация!');
			
			res.sendFile(path.join(__dirname, 'redirect.html'));
			console.log(`Получили токены ${JSON.stringify(tokens)}`);
		} else {
			console.log('Ошибка авторизации');
			res.status(400).send('Ошибка авторизации');
			pusher.authError(telegram_id, 'Ошибка авторизации');
			console.log('Ошибка авторизации');

		}
		
	} catch (error) {
		pusher.authError(telegram_id, 'Ошибка авторизации');
		console.error('Ошибка при получении токенов:', error);
	}
}

async function checkAuth(req, res) {
	try {
		const userId = req.query.userId;
		console.log('Проверка авторизации для userId:', userId); // Логирование для отладки
		
		if (!userId) {
			return res.status(400).send('Не предоставлен userId');
		}
		
		const isAuthorized = await checkAuthorization(userId);
		console.log('Статус авторизации:', isAuthorized); // Логирование для отладки
		
		if (!isAuthorized) {
			return res.status(401).send('Пользователь не авторизован');
		}
		
		return res.status(200).send('Пользователь авторизован');
	} catch (error) {
		console.error('Ошибка при проверке авторизации:', error);
		res.status(500).send('Ошибка на сервере');
	}
}

module.exports = {
	handleAuth,
	checkAuth
};