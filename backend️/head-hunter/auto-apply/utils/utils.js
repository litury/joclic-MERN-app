const { makeRequest, getSimilarVacancies, applyToVacancy } = require('./requests-api');
const { extractResumeIds, formatVacanciesForApply } = require('./formatters');
const {resumeSaver} = require('../.')

async function getResumeData(token, telegram_id) {
	const data = await makeRequest(token);
	const ids = extractResumeIds(data);
	
	return { data, ids };
}

function createResumeObject(data) {
	let appliesPerResume = {};
	for (const item of data) {
		appliesPerResume[item.id] = {
			title: item.title,
			applies: 0,
			vacancies: []
		};
	}
	return appliesPerResume;
}

async function applyToVacancies(resumeId, token, appliesPerResume) {
	const vacancies = await getSimilarVacancies(resumeId, token);
	if (vacancies.length > 0) {
		const vacanciesToApply = await formatVacanciesForApply(vacancies, 1);
		if (vacanciesToApply.length > 0) {
			try {
				await applyToVacancy(resumeId, vacanciesToApply[0].id, "Привет, я хочу у вас работать!", token);
				if (appliesPerResume[resumeId]) {
					appliesPerResume[resumeId].applies++;
					appliesPerResume[resumeId].vacancies.push(vacanciesToApply[0].alternate_url);
				} else {
					console.log(`Резюме с ID ${resumeId} не найдено в объекте appliesPerResume.`);
				}
			} catch (error) {
				console.error(`Ошибка при отправке отклика на вакансию ${vacanciesToApply[0].id}:`, error);
			}
		}
	}
	return appliesPerResume;
}

function logResults(appliesPerResume) {
	console.log('Все отклики успешно отправлены!');
	console.log('Количество откликов по резюме:', appliesPerResume);
}

module.exports = { getResumeData, createResumeObject, applyToVacancies, logResults };