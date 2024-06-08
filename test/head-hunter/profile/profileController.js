const { findAccount } = require('../../db/accounts-model')

async function getProfile(req, res) {
	const { telegram_id } = req.query;
	
	if (!telegram_id) {
		res.status(400).json({ error: 'Отсутствует telegram_id' });
		return;
	}
	
	console.log(`Получили ${telegram_id}`);
	
	let account;
	try {
		account = await findAccount(telegram_id); // Использование await здесь
		console.log(`Нашли account`, account);
	} catch (error) {
		console.error('Ошибка при поиске аккаунта:', error);
		res.status(500).json({ error: 'Внутренняя ошибка сервера' });
		return;
	}
	
	if (account && account.resumes) {
		console.log(`Отправляем account`, account.resumes);
		res.json(account.resumes);
	} else {
		res.status(404).json({ error: 'Резюме не найдены' }); // Добавлено условие для случая, когда резюме отсутствуют
	}
}

module.exports = {
	getProfile
};