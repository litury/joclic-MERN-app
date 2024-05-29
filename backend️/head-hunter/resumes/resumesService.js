// File: resumesService.js

const axios = require('axios');

async function makeRequest(account) {
	console.log(`Отправляем запрос для: ${account.telegram_id}`);
	
	const options = {
		method: 'GET',
		url: 'https://api.hh.ru/resumes/mine',
		headers: {
			'Authorization': `Bearer ${account.accessToken}`,
			'HH-User-Agent': 'JoCLic/1.0 (litury@icloud.com)'
		},
		params: {
			locale: 'RU',
			host: 'hh.ru'
		}
	};
	
	try {
		const response = await axios(options);
		
		console.log(`Ответ от hh.ru: ${response.data}`);
		return response.data;
	} catch (error) {
		console.error('Ошибка при выполнении запроса:', error);
		
		if (error.response && error.response.status === 403) {
			throw new Error('Текущий пользователь не является соискателем или возникли проблемы с авторизацией');
		}
		
		throw error;
	}
}


module.exports = {
	makeRequest,
};