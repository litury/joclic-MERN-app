const axios = require('axios');


// Запрашиваем все вакансии
async function getAllRemoteVacancies(token) {
	let allVacancies = [];
	let page = 0;
	let hasMore = true;
	
	while (hasMore) {
		const params = {
			text: 'name:("frontend developer" OR "Верстальщик" OR "js developer" OR "front-end developer" OR "веб-разработчик" OR "web developer" OR react OR vue OR javascript OR html OR css OR frontend) AND NOT (backend OR senior OR lead OR "tech lead" OR "QA" OR "тестировщик" OR "верстальщик лендингов")',
			schedule: 'remote', // Фильтр для удаленной работы
			per_page: 100, // Количество вакансий на страницу
			page: page, // Номер страницы
			search_field: 'name'
		};
		
		const options = {
			method: 'GET',
			url: 'https://api.hh.ru/vacancies',
			headers: {
				'Authorization': `Bearer ${token}`,
				'HH-User-Agent': 'JoCLic/1.0 (litury@icloud.com)'
			},
			params: params
		};
		
		try {
			const response = await axios(options);
			allVacancies = allVacancies.concat(response.data.items);
			hasMore = response.data.pages > page;
			page++;
		} catch (error) {
			console.error('Ошибка при получении вакансий:', error);
			throw error;
		}
	}
	
	console.log(allVacancies.length)
	return allVacancies; // Возвращает массив всех вакансий
}

// Запрашиваем все отклики
async function getResponses(token) {
	const responses = [];
	let page = 0;
	let hasMore = true;
	
	while (hasMore) {
		const options = {
			method: 'GET',
			url: 'https://api.hh.ru/negotiations',
			headers: {
				'Authorization': `Bearer ${token}`,
				'HH-User-Agent': 'JoCLic/1.0 (litury@icloud.com)'
			},
			params: {
				page: page,
				per_page: 100, // Можно увеличить, если API позволяет
				status: 'all' // Если нужны только активные отклики
			}
		};
		
		try {
			const response = await axios(options);
			responses.push(...response.data.items);
			hasMore = page < response.data.pages - 1;
			page++;
		} catch (error) {
			console.error('Ошибка при получении откликов:', error);
			throw error;
		}
	}
	console.log(responses.length)
	return responses; // Возвращает массив всех откликов
}

// Фильтруем вакансии без анкеты
async function formatVacanciesForApply(vacancies) {
	const applicableVacancies = vacancies.filter(vacancy =>
		!vacancy.archived &&
		vacancy.apply_alternate_url !== null &&
		!vacancy.has_test &&
		!vacancy.employer_insider_interview
	);
	
	return applicableVacancies;
}

// Результат доступных вакансий
async function getVacanciesWithoutResponses(token, resumeId) {
	// Получаем все вакансии
	const allVacancies = await getAllRemoteVacancies(token);
	
	// Фильтруем вакансии
	const formatAllVacancies = await formatVacanciesForApply(allVacancies)
	
	// Получаем все отклики
	const responses = await getResponses(token);
	console.log(responses);

// Фильтруем отклики по конкретному резюме, проверяя наличие объекта resume
	const responsesForResume = responses.filter(response => response.resume && response.resume.id === resumeId);
	console.log(`Получили ${responsesForResume.length} откликов на резюме ${resumeId}`);
	
	// Создаем массив ID вакансий, на которые уже был отправлен отклик по данному резюме
	const respondedVacancyIds = responsesForResume.map(response => response.vacancy.id);
	console.log(`Получили ${respondedVacancyIds.length} ID вакансий, на которые уже был отправлен отклик`);
	
	// Фильтруем вакансии, исключая те, на которые уже был отправлен отклик по данному резюме
	const vacanciesWithoutResponses = formatAllVacancies.filter(vacancy =>
		!respondedVacancyIds.includes(vacancy.id)
	);
	
	console.log(`Получили ${vacanciesWithoutResponses.length} вакансий без откликов`);
	return vacanciesWithoutResponses;
}


module.exports = { getVacanciesWithoutResponses };
