// Filename: accounts-model.js
const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema({
	site: String,
	login: String,
	password: String,
	telegram_id: String,
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	checkResponseJobId: { // Показывает id задачи проверки откликов
		type: String,
		default: null
	},
	sendResponseJobId: { // Показывает id задачи отправки откликов
		type: String,
		default: null
	},
	
	responses: [
		{
			date: Date,
			responseType: String,
			text: Object,
		}
	],
	
	isSentByApp: {
		type: Number,
		default: 0
	},
	
	appliedVacancies: [String],
	responseStats: {
		totalResponses: {type: Number, default: 0},
		totalPending: {type: Number, default: 0},
		totalInvitations: {type: Number, default: 0},
		totalRejections: {type: Number, default: 0},
		totalViewed: {type: Number, default: 0},
	},
	jocIndex: {type: Number, default: 0},
	lastUpdated: {type: Date, default: Date.now},
	
	accessToken: {
		type: String,
		required: true
	},
	
	refreshToken: {
		type: String,
		required: true
	},
	
	expiresIn: {
		type: Number,
		required: true
	},
	
	tokenUpdateDate: {
		type: Date,
		default: Date.now
	},
	resumes: [
		{
			id: String,
			title: String,
			totalViews: Number,
			isScriptActive: { type: Boolean, default: false }
		}
	],
});

// Middleware для подсчета статистики и индекса JOC
AccountSchema.pre('save', async function (next) {
	const account = this;
	
	try {
		const {responses: responsesData} = account;
		
		// Инициализация статистики
		let totalPending = 0;
		let totalInvitations = 0;
		let totalRejections = 0;
		let totalViewed = 0;
		
		// Подсчет статистики
		responsesData.forEach(response => {
			switch (response.responseType) {
				case 'pending':
					totalPending++;
					break;
				case 'invitation':
					totalInvitations++;
					break;
				case 'rejection':
					totalRejections++;
					break;
				case 'viewed':
					totalViewed++;
					break;
			}
		});
		
		const totalResponses = responsesData.length;
		
		// Явное присваивание статистики
		account.responseStats.totalResponses = totalResponses;
		account.responseStats.totalPending = totalPending;
		account.responseStats.totalInvitations = totalInvitations;
		account.responseStats.totalRejections = totalRejections;
		account.responseStats.totalViewed = totalViewed;
		
		// Обновление даты последнего изменения
		account.lastUpdated = new Date();
		
		// Расчет индекса JOC
		const КП = totalInvitations / totalResponses || 0;
		const ОБ = totalPending / totalResponses || 0;
		const ОП = totalViewed / totalResponses || 0;
		const ОО = totalRejections / totalResponses || 0;
		
		// Константы для расчета индекса JOC
		const ВП = 1, ОБ_вес = 0.1, ОП_вес = 0.2, ОО_вес = 0.7;
		account.jocIndex = (КП * ВП * (1 - ОБ_вес * ОБ - ОП_вес * ОП - ОО_вес * ОО)) * 100;
		
		// Округление индекса JOC до двух знаков после запятой
		account.jocIndex = parseFloat(account.jocIndex.toFixed(2));
		
		console.log(`Новый индекс JOC: ${account.jocIndex}`);
	} catch (err) {
		console.error('Ошибка в middleware:', err);
	} finally {
		next();
	}
});

const Account = mongoose.model('Account', AccountSchema);

// Обновление или создание аккаунта
async function upsertAccount(telegram_id, newAccountData) {
	try {
		const updatedAccount = await Account.findOneAndUpdate(
			{ telegram_id: telegram_id },
			newAccountData,
			{
				new: true, // Возвращаем обновленный документ
				upsert: true // Создаем новый если нету
			}
		);
		return updatedAccount;
	} catch (error) {
		console.error('Ошибка при обновлении или создании аккаунта:', error);
		return null;
	}
}

// Получения accessToken по telegram_id
async function getAccessToken(telegram_id) {
	try {
		const account = await Account.findOne({ telegram_id: telegram_id });
		if (account) {
			return account.accessToken;
		} else {
			return null;
		}
	} catch (error) {
		console.error('Ошибка при получении accessToken:', error);
		return null;
	}
}

// Сохраняем данные резюме
async function resumeSaver(resumes, telegram_id) {
	console.log('Пробуем сохранить все резюме')
	try {
		const account = await Account.findOne({ telegram_id: telegram_id });
		
		const resumeData = resumes.map(resume => ({
			id: resume.id,
			title: resume.title,
			totalViews: resume.total_views,
			isScriptActive: false,
		}));
		
		account.resumes = resumeData;
		
		await account.save();
	} catch (error) {
		console.error('Ошибка при сохранении', error);
		return null;
	}
}

// Сохраняем данные резюме
async function findAccount(telegram_id) {
	try {
		const account = await Account.findOne({ telegram_id: telegram_id });
		return account
	} catch (error) {
			console.error('Ошибка при поиске', error);
		return null;
	}
}

// Функция для обновления состояния скрипта
const updateScriptStatus = async (telegramId, resumeId, isActive) => {
	try {
		const result = await Account.findOneAndUpdate(
			{ telegram_id: telegramId, 'resumes.id': resumeId },
			{ $set: { 'resumes.$.isScriptActive': isActive } },
			{ new: true } // Возвращает документ после обновления
		);
		
		if (result) {
			console.log(`Статус скрипта для резюме с ID ${resumeId} обновлен на ${isActive}`);
		} else {
			console.log(`Резюме с ID ${resumeId} не найдено или статус уже установлен на ${isActive}`);
		}
	} catch (error) {
		console.error('Ошибка при обновлении статуса скрипта:', error);
		throw error;
	}
};









































async function saveAccountToDB(username, password, telegram_id) {
	const lowerCaseUsername = username.toLowerCase();
	
	// Ищем аккаунт по фильтру
	let existing = await Account.findOne({
		login: lowerCaseUsername,
		site: 'HeadHunter',
		telegram_id: telegram_id,
	});
	
	console.log(`Нашли аккаунт в базе данных: ${existing}`)
	
	// Если нашли - обновляем пароль
	if (existing) {
		// Обновляем пароль
		await Account.findOneAndUpdate({
			login: lowerCaseUsername,
			site: 'HeadHunter',
			telegram_id: telegram_id
		}, {password: password}, {returnOriginal: false});
		console.log(`Обновили пароль в базе данных: ${existing}`)
		return existing;
	} else {
		
		// Создаем новый аккаунт
		let dbAccount = new Account({
			site: 'HeadHunter',
			login: lowerCaseUsername,
			password: password,
			telegram_id: telegram_id
		});
		await dbAccount.save();
		console.log(`Сохранили или обновили аккаунт в базе данных: ${dbAccount}`)
		return dbAccount;
	}
}

module.exports = {
	Account,
	saveAccountToDB,
	upsertAccount,
	getAccessToken,
	resumeSaver,
	findAccount,
	updateScriptStatus
}