const { getResumeData, createResumeObject, applyToVacancies, logResults } = require('./utils/utils');

const token = 'USERR7FE6V0UN9NASVJNTI9T2MIAO22UR21UBVQET2EOC2FIA5H8H8LQ95FA6FGK';

async function autoApply(token, userId, maxApplies) {
	try {
		const resumeData = await getResumeData(token, userId);
		let appliesPerResume = createResumeObject(resumeData.data);
		let totalApplies = 0;
		let resumeIndex = 0;
		
		while (totalApplies < maxApplies) {
			const resumeId = resumeData.ids[resumeIndex];
			appliesPerResume = await applyToVacancies(resumeId, token, appliesPerResume);
			totalApplies++;
			resumeIndex = (resumeIndex + 1) % resumeData.ids.length;
		}
		
		logResults(appliesPerResume);
	} catch (error) {
		console.error('Ошибка при автоматической отправке откликов:', error);
	}
}

autoApply(token, 5);