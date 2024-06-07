const axios = require('axios');

async function makeRequest(token) {
	console.log(`Отправляем запрос получения резюме`);
	
	const options = {
		method: 'GET',
		url: 'https://api.hh.ru/resumes/mine',
		headers: {
			'Authorization': `Bearer ${token}`,
			'HH-User-Agent': 'JoCLic/1.0 (litury@icloud.com)'
		},
		params: {
			locale: 'RU',
			host: 'hh.ru'
		}
	};
	
	try {
		const response = await axios(options);
		
		console.log(`Ответ от hh.ru: ${response.data.items.length}`);
		return response.data.items;
	} catch (error) {
		console.error('Ошибка при выполнении запроса:', error);
		
		if (error.response && error.response.status === 403) {
			throw new Error('Текущий пользователь не является соискателем или возникли проблемы с авторизацией');
		}
		
		throw error;
	}
}

async function getSimilarVacancies(resumeId, token) {
	console.log(`Ищем вакансии для ${resumeId}`)
	let allVacancies = [];
	let page = 0;
	let per_page = 100;
	let totalPages = 1;
	
	while (page < totalPages) {
		const options = {
			method: 'GET',
			url: `https://api.hh.ru/resumes/${resumeId}/similar_vacancies`,
			headers: {
				'Authorization': `Bearer ${token}`,
				'HH-User-Agent': 'JoCLic/1.0 (litury@icloud.com)'
			},
			params: {
				locale: 'RU',
				host: 'hh.ru',
				page: page,
				per_page: per_page
			}
		};
		
		try {
			const response = await axios(options);
			console.log(`Ответ от hh.ru: ${JSON.stringify(response.data.items.length, null, 2)}`);
			return response.data.items;
			
			// allVacancies = allVacancies.concat(response.data.items);
			// totalPages = response.data.pages;
			// page++;
		} catch (error) {
			console.error('Ошибка при выполнении запроса:', error);
			if (error.response && error.response.status === 403) {
				throw new Error('Текущий пользователь не является соискателем или возникли проблемы с авторизацией');
			}
			throw error;
		}
	}
	
	console.log(`Ответ от hh.ru: ${JSON.stringify(allVacancies.length, null, 2)}`);
	return allVacancies;
}

async function applyToVacancy(resumeId, vacancyId, message = null, token) {
	const options = {
		method: 'POST',
		url: 'https://api.hh.ru/negotiations',
		headers: {
			'Authorization': `Bearer ${token}`,
			'HH-User-Agent': 'JoCLic/1.0 (litury@icloud.com)',
			'Content-Type': 'multipart/form-data'
		},
		data: {
			resume_id: resumeId,
			vacancy_id: vacancyId,
			message: message
		}
	};
	
	try {
		const response = await axios(options);
		console.log(`Отклик отправлен ${JSON.stringify(response.data, null, 2)}`);
	} catch (error) {
		if (error.response && error.response.data && error.response.data.description === 'Must process test first') {
			console.log('Вакансия требует прохождения теста. Пропускаем...');
		} else {
			console.error('Ошибка при отправки отклика:', error);
			throw error;
		}
	}
}

module.exports = { makeRequest, getSimilarVacancies, applyToVacancy };