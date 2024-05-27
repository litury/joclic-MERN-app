const qs = require('qs');
const axios = require('axios');
const pusher = require('../../../pusher/pusher');

// Константы для идентификаторов клиента и секретного ключа
const CLIENT_ID = process.env.OAUTH2_CLIENT_ID;
const CLIENT_SECRET = process.env.OAUTH2_CLIENT_SECRET;

// Получения токенов с помощью кода авторизации
async function getTokens(authorizationCode, telegramId) {
	const data = qs.stringify({
		grant_type: 'authorization_code',
		client_id: CLIENT_ID,
		client_secret: CLIENT_SECRET,
		code: authorizationCode
	});
	
	const config = {
		method: 'post',
		url: 'https://api.hh.ru/token',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		data: data
	};
	
	try {
		const response = await axios(config);
		const tokens = response.data;
		
		if (tokens.access_token) {
			// Уведомление об успешной авторизации через Pusher
			pusher.authSuccess(telegramId, 'Удачная авторизация!');
			return tokens;
		}
	} catch (error) {
		// Уведомление об ошибке авторизации через Pusher
		pusher.authError(telegramId, 'Ошибка авторизации');
	}
}

// Обновления токенов с refresh_token
async function refreshTokens(refreshToken, telegramId) {
	const data = qs.stringify({
		grant_type: 'refresh_token',
		client_id: CLIENT_ID,
		client_secret: CLIENT_SECRET,
		refresh_token: refreshToken
	});
	
	const config = {
		method: 'post',
		url: 'https://api.hh.ru/token',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		data: data
	};
	
	try {
		const response = await axios(config);
		const tokens = response.data;
		
		if (tokens.access_token) {
			// Уведомление об успешной авторизации через Pusher
			pusher.authSuccess(telegramId, 'Удачная авторизация!');
			return tokens;
		}
	} catch (error) {
		// Уведомление об ошибке авторизации через Pusher
		pusher.authError(telegramId, 'Ошибка авторизации');
	}
}

module.exports = {
	getTokens,
	refreshTokens
};