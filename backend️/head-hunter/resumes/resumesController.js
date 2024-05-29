// File: resumesController.js

const { Account } = require('../../db/accounts-model');
const {makeRequest} = require('./resumesService');
const { refreshTokens } = require('../auth/API/authService');

exports.getResumes = async (req, res) => {
	const telegram_id = req.query.telegram_id;
	console.log(`Получаем резюме для пользователя с telegram_id: ${telegram_id}`);
	
	const account = await Account.findOne({ telegram_id: telegram_id });
	
	if (!account || !account.accessToken) {
		return res.send('Вы не авторизованы');
	}
	
	try {
		const response = await makeRequest(account);
		res.json(response);
	} catch (error) {
		
		if (error.message === 'token-expired') {
			const newTokens = await refreshTokens(account.refreshToken, telegram_id);
			if (newTokens) {
				const response = await makeRequest(account);
				res.json(response);
			} else {
				res.status(500).json({ message: 'Не удалось обновить токены' });
			}
		} else {
			res.status(500).json({ message: 'Ошибка при выполнении запроса' });
		}
	}
};