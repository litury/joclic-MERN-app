function extractResumeIds(data) {
	return data.map(item => item.id);
}

async function formatVacanciesForApply(vacancies, maxApplies) {
	const applicableVacancies = vacancies.filter(vacancy => !vacancy.archived && vacancy.apply_alternate_url !== null);
	const vacanciesToApply = applicableVacancies.slice(0, maxApplies);
	return vacanciesToApply;
}
module.exports = { extractResumeIds, formatVacanciesForApply}