// Filename: db/vacancy-model.js

const mongoose = require("mongoose");
const {connectDB} = require("./connectDB");
const {User} = require("./user-model");
const {Account} = require("./accounts-model");

const VacancySchema = new mongoose.Schema({
	title: String,
	employerName: String,
	employerLogo: String,
	salary: Number,
	link: String,
	description: String,
	skills: [String],
	employer: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Employer'
	},
	date: Date, // date: "2021-08-01"
	status: String, // status: "open", "closed"
	keyword: String, // keyword: "Vue", "React", "Java"
	source: String, // source: "HeadHunter", "CareerHabr"
	hasResponse: Boolean,
	hasForm: {
		type: Boolean,
		default: false
	}
});

const Vacancy = mongoose.model('Vacancy', VacancySchema);



async function saveVacancyToDB(vacancy, keyword, source) {

	// Добавляем ключевое слово в объект вакансии
	vacancy.keyword = keyword;
	vacancy.source = source;

	// Создаем объект вакансии
	let dbVacancy = new Vacancy(vacancy);
	await dbVacancy.save();
}

async function getVacancies(status, source, keyword) {
	const validStatuses = ['open', 'closed', 'pending'];
	if (!validStatuses.includes(status)) {
		throw new Error(`Invalid status: ${status}`);
	}
	
	const query = { status: status, source: source, hasForm: false };
	
	if (keyword) {
		query.keyword = keyword;
	}
	
	return Vacancy.find(query);
}

// Добавляем новую функцию для поиска вакансии по ссылке
async function findVacancyByLink(link, source) {
	return Vacancy.findOne({ link: link, source: source });
}

// Добавляем новую функцию для обновления статуса вакансии по ссылке
async function updateVacancyStatus(link, status, source) {
	console.log(`Обновляем статус вакансии ${link} на ${status} из источника ${source}`);

	// Проверяем, является ли статус одним из допустимых значений
	const validStatuses = ['open', 'closed', 'pending'];
	if (!validStatuses.includes(status)) {
		throw new Error(`Invalid status: ${status}`);
	}
	
	return Vacancy.updateOne({ link: link, source: source }, { status: status });
}

module.exports = {
	Vacancy,
	saveVacancyToDB,
	getVacancies,
	findVacancyByLink,
	updateVacancyStatus
}
