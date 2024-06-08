// Filename: application-model.js

const {User} = require('./user-model');
const {Account} = require('./accounts-model');
const {Vacancy} = require('./vacancy-model');

const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema({
	user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	account_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Account'},
	vacancy_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Vacancy'},
	application_date: String,
	status: String,
	isArchived: {type: Boolean, default: false},
	
});


const Application = mongoose.model('Application', ApplicationSchema);


async function updateArchivedApplication(application) {
	console.log('Отправляем отклик в архив')
	
	const user = await User.findOne({telegram_id: application.user_id});
	console.log(`НАШЛИИИ пользователя ${user._id}`);
	
	const account = await Account.findOne({login: application.account_id});
	console.log(`НАШЛИИИ аккаунт ${account._id}`);
	
	// Создаем фильтр по user_id и vacancy_id
	let filter = {
		user_id: user._id,
		account_id: account._id,
		vacancy_id: application.vacancy_id
	};
	
	// Создаем документ обновления с оператором $set
	let update = {
		$set: {
			isArchived: application.isArchived,
		}
	};
	
	// Обновляем документ в коллекции с опцией upsert, которая создает новый документ, если фильтр не находит совпадений
	let result = await Application.updateOne(filter, update, {upsert: true});
	
	// Проверяем, был ли документ создан или перезаписан
	if (result.upsertedId) {
		// Если был создан новый документ, выводим его _id
		console.log(`Создан новый документ с _id: ${result.upsertedId._id}`);
	} else if (result.modifiedCount > 0) {
		// Если был перезаписан существующий документ, выводим количество обновленных документов
		console.log(`Перезаписан ${result.modifiedCount} документ`);
	} else {
		// Если ничего не изменилось, выводим сообщение
		console.log(`Документ не был создан или перезаписан`);
	}
}

async function updateApplicationToDB(application) {

	
	// Создаем фильтр по user_id и vacancy_id
	let filter = {
		user_id: application.user_id,
		account_id: application.account_id,
		vacancy_id: application.vacancy_id
	};
	
	// Создаем документ обновления с оператором $set
	let update = {
		$set: {
			application_date: application.application_date,
			isArchived: application.isArchived,
		}
	};
	
	// Обновляем документ в коллекции с опцией upsert, которая создает новый документ, если фильтр не находит совпадений
	let result = await Application.updateOne(filter, update, {upsert: true});
	
	// Проверяем, был ли документ создан или перезаписан
	if (result.upsertedId) {
		// Если был создан новый документ, выводим его _id
		console.log(`Создан новый документ с _id: ${result.upsertedId._id}`);
	} else if (result.modifiedCount > 0) {
		// Если был перезаписан существующий документ, выводим количество обновленных документов
		console.log(`Перезаписан ${result.modifiedCount} документ`);
	} else {
		// Если ничего не изменилось, выводим сообщение
		console.log(`Документ не был создан или перезаписан`);
	}
}

async function saveApplicationToDB(application) {
	console.log('Сохраняем отклик в базу данных', application)
	
	const user = await User.findOne({telegram_id: application.user_id});
	console.log(`НАШЛИИИ пользователя ${user._id}`);
	
	const account = await Account.findOne({login: application.account_id});
	console.log(`НАШЛИИИ аккаунт ${account._id}`);
	
	// Создаем фильтр по user_id и vacancy_id
	let filter = {
		user_id: user._id,
		account_id: account._id,
		vacancy_id: application.vacancy_id
	};
	
	// Создаем документ обновления с оператором $set
	let update = {
		$set: {
			application_date: application.application_date,
			status: application.status,
			isArchived: application.isArchived
		}
	};
	
	// Обновляем документ в коллекции с опцией upsert, которая создает новый документ, если фильтр не находит совпадений
	let result = await Application.updateOne(filter, update, {upsert: true});
	
	// Проверяем, был ли документ создан или перезаписан
	if (result.upsertedId) {
		// Если был создан новый документ, выводим его _id
		console.log(`Создан новый документ с _id: ${result.upsertedId._id}`);
	} else if (result.modifiedCount > 0) {
		// Если был перезаписан существующий документ, выводим количество обновленных документов
		console.log(`Перезаписан ${result.modifiedCount} документ`);
	} else {
		// Если ничего не изменилось, выводим сообщение
		console.log(`Документ не был создан или перезаписан`);
	}
}

async function getApplicationsByStatusAndUser(status, userId) {
	
	// Получаем отклики на вакансии, соответствующие условию
	let pendingApplications = await Application.find(
		{
			$and:
				[
					{
						application_date:
							{$eq: status}
					},
					{
						user_id:
							{$eq: userId}
					}
				]
		});
	
	// Возвращаем результат поиска
	return pendingApplications;
}



module.exports = {
	Application,
	saveApplicationToDB,
	getApplicationsByStatusAndUser,
	updateApplicationToDB,
	updateArchivedApplication
}