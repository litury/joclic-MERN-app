function extractResumeIds(data) {
	return data.map(item => item.id);
}

async function formatVacanciesForApply(vacancies, maxApplies) {
	const applicableVacancies = vacancies.filter(vacancy =>
		!vacancy.archived &&
		vacancy.apply_alternate_url !== null &&
		!vacancy.has_test &&
		!vacancy.employer_insider_interview
	);
	
	const vacanciesToApply = applicableVacancies.slice(0, maxApplies);
	return vacanciesToApply;
}

module.exports = { extractResumeIds, formatVacanciesForApply}