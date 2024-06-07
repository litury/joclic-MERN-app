const {getAccessToken} = require("../../db/accounts-model");
const {applyToVacancy} = require("./requests-api");
const {getVacanciesWithoutResponses} = require("./utils");


const applyToVacanciesController = async (req, res) => {
	const {resumeId, telegram_id, maxApplies} = req.body;
	console.log(`Получили resumeId ${resumeId}`)
	console.log(`Получили telegram_id ${telegram_id}`)
	console.log(`Получили maxApplies ${maxApplies}`)
	
	const token = await getAccessToken(telegram_id);
	console.log(`Получили token ${token}`)
	
	try {
		// Получаем доступные вакансии для отклика
		const vacancies = await getVacanciesWithoutResponses(token, resumeId);
		console.log(`Получили ${vacancies.length} вакансий`);
		
		let appliedCount = 0; // Счетчик отправленных откликов
		
		// Отправляем отклики, пока не достигнем maxApplies или пока есть доступные вакансии
		for (const vacancy of vacancies) {
			if (appliedCount < maxApplies) {
				console.log(`Отправляем отклик на вакансию ${vacancy.id}`);
				await applyToVacancy(resumeId, vacancy.id, token);
				appliedCount++;
			} else {
				break; // Прекращаем цикл, если достигли maxApplies
			}
		}
		
		// Здесь логика для обновления пула откликов пользователя
		// ...
		
		res.status(201).send(`Успешно запустили`);
	} catch (error) {
		console.error('Ошибка:', error.message);
		res.status(500).send('Внутренняя ошибка сервера');
	}
};

module.exports = {applyToVacanciesController};


