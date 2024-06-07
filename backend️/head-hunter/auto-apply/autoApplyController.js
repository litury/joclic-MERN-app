

const { getResumeData, createResumeObject, applyToVacancies, logResults } = require('./utils');
const { getAccessToken } = require('../../db/accounts-model');

async function autoApply(req, res) {
	const {telegram_id} = req.body;
	
	console.log(`Получили ${telegram_id}`)
	
	try {
		const token = await getAccessToken(telegram_id);
		const resumeData = await getResumeData(token, telegram_id);
		let appliesPerResume = createResumeObject(resumeData.data);
		
		for (const resumeId of resumeData.ids) {
			appliesPerResume = await applyToVacancies(resumeId, token, appliesPerResume);
		}
		
		res.json(appliesPerResume);
	} catch (error) {
		console.error('Ошибка при автоматической отправке откликов:', error);
		res.status(500).json({ error: 'Внутренняя ошибка сервера' });
	}
}

module.exports = {
	autoApply
};