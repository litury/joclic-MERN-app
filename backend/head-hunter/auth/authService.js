const qs = require('qs');
const axios = require('axios');
const pusher = require('../../pusher/pusher');
const {upsertAccount, Account} = require('../../db/accounts-model');

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
			return tokens;
		}
	} catch (error) {
		console.log(`Не смогли получить токены: ${error}`);
		return null;
	}
}

// Обновление токенов через 2 недели
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
		const newTokens = response.data;
		
		if (newTokens) {
			pusher.authSuccess(telegramId, 'Удачная авторизация!');
			
			await upsertAccount(telegramId, {
				accessToken: newTokens.access_token,
				refreshToken: newTokens.refresh_token,
				expiresIn: newTokens.expires_in,
				tokenUpdateDate: new Date()
			});
			
			return newTokens;
		}
	} catch (error) {
		pusher.authError(telegramId, 'Ошибка авторизации');
		return null;
	}
}

async function checkAuthorization (userId) {
	// Здесь логика для проверки авторизации пользователя
	const account = await Account.findOne({ telegram_id: userId });
	return account && account.accessToken; // Пример условия авторизации
};

module.exports = {
	getTokens,
	refreshTokens,
	checkAuthorization
};