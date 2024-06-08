// Filename: user-model.js

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	telegram_id: String,
	first_name: String,
	last_name: String,
	username: String,
	language_code: String,
	auth_status: Boolean,
	login_time: Date,
	accounts: [{
		type: mongoose.Schema.Types.ObjectId, // Добавляем поле accounts с типом ObjectId
		ref: 'Account' // Указываем, что поле ссылается на модель Account
	}],
	
	checkResponsesStatus: { // Показывает что проверка откликов запущена
		type: Boolean,
		default: false // устанавливаем значение по умолчанию false
	},
	
	senderJobStatus: {
		type: Boolean,
		default: false
	},
	
	checkerJobId: { // Показывает результат проверки откликов
		type: String,
		default: 'failed'
	},
	
});

const User = mongoose.model('User', UserSchema);

// Создаем функцию для сохранения пользователя в базе данных
const saveUser = async (ctx) => {
	// Получаем объект с данными о пользователе из контекста
	const user_data = ctx.from;
	
	// Проверяем, есть ли пользователь в базе данных по его telegram_id
	const user = await User.findOne({ telegram_id: user_data.id });
	
	// Если пользователя нет, то создаем новый документ в коллекции users с его данными
	if (!user) {
		
		const newUser = new User({
			telegram_id: user_data.id,
			first_name: user_data.first_name,
			last_name: user_data.last_name,
			username: user_data.username,
			language_code: user_data.language_code,
			auth_status: false,
			login_time: new Date()
		});
		
		// Сохраняем новый объект User в базе данных
		await newUser.save();
		
		// Возвращаем новый объект User
		return newUser;
	}
	
	// Если пользователь есть, то возвращаем существующий объект User
	return user;
};


async function getUser(telegram_id) {
	// Ищем пользователя по электронной почте
	const user = await User.findOne({ telegram_id: telegram_id });
	
	if (!user) {
		throw new Error(`User with email ${telegram_id} not found`);
	}
	return user;
}

module.exports = {
	User,
	getUser,
	saveUser
}