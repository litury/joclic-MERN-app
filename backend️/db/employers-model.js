// employers-model.js

const mongoose = require("mongoose");

const EmployerSchema = new mongoose.Schema({
	name: String,
	website: String,
	description: String,
	industry: [String],
	vacancies: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Vacancy'
	}]
})

const Employer = mongoose.model('Employer', EmployerSchema);

const getEmployers = async () => {
	return Employer.find({});
}



module.exports = {
	Employer,
	getEmployers
}

