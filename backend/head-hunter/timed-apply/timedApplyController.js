// File: timedApplyController.js
const {processVacancyApplications} = require("./utils");

const applyToVacanciesController = async (req, res) => {
	console.log('Запрос на отправку откликов');
	const {resumeId, telegram_id, maxApplies} = req.body;
	try {
		// Вызываем функцию обработки отправки откликов
		await processVacancyApplications(resumeId, telegram_id, maxApplies);
		res.status(201).send(`Успешно запустили`);
	} catch (error) {
		console.error('Ошибка:', error.message);
		res.status(500).send('Внутренняя ошибка сервера');
	}
};

module.exports = {applyToVacanciesController};



