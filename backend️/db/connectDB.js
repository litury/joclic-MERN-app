const mongoose = require("mongoose");
require('dotenv').config();

const connectDB = async () => {
	try {
		// Создаем соединения с базами данных
		await mongoose.connect(process.env.MONGODB_URI);
		
		console.log("MongoDB connected");
	} catch (err) {
		console.log(err);
	}
};

const disconnectDB = async () => {
	try {
		await mongoose.disconnect();
		console.log("MongoDB disconnected");
	} catch (err) {
		console.log(err);
	}
};

module.exports = {
	connectDB,
	disconnectDB
}

