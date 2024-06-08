const express = require('express');
const http = require('http');
const cors = require('cors');
const {Connect} = require("taskforce-connector");

const {handleAuth, checkAuth} = require('./head-hunter/auth/authController');
const {autoApply} = require('./head-hunter/auto-apply/autoApplyController');
const {getProfile} = require('./head-hunter/profile/profileController')
const {applyToVacanciesController} = require('./head-hunter/timed-apply/timedApplyController');
const {myQueue} = require('./queues/responseCheckerQueue');
const{updateScriptStatus} = require('./db/accounts-model');

const app = express();
const server = http.createServer(app);

// Создаем подключение к Taskforce
const taskforceConnection = Connect("headhunter", process.env.TASKFORCE_CONNECTOR_KEY, {
	host: process.env.TASKFORCE_CONNECTOR_HOST,
	port: process.env.TASKFORCE_CONNECTOR_PORT,
	password: process.env.TASKFORCE_CONNECTOR_PASSWORD,
	username: process.env.TASKFORCE_CONNECTOR_USERNAME,
});

// Разрешение CORS
app.use(cors({
	origin: ["https://tg-mini-app.local", "https://hhcheckerfront-1ket.vercel.app", "https://litury-hhcheckerfront-4372.twc1.net"],
	credentials: true,
	methods: ["GET", "POST", "PUT", "DELETE"],
	allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

app.get('/redirect', handleAuth);
app.post('/free-apply', autoApply);
app.get('/check-auth', checkAuth);
app.get('/profile', getProfile)
app.post('/apply', applyToVacanciesController)

app.get('/', (req, res) => {
	console.log('Запрос на главную страницу');
	res.send('Hello World');
});

app.delete('/delete-apply', async (req, res) => {
	console.log('Запрос на удаление откликов');
	const {resumeId, telegram_id, maxApplies} = req.body;
	
	try {
		const jobs1 = await myQueue.getRepeatableJobs();
		console.log('ДО УДАЛЕНИЯ повторяющиеся задачи:', jobs1);
		
		await myQueue.removeRepeatableByKey(
			`sendApply-${telegram_id}-${resumeId}:sendApply-${telegram_id}-${resumeId}::Europe/Moscow:0 12 * * *`,
		);
		
		const jobs2 = await myQueue.getRepeatableJobs();
		console.log('ПОСЛЕ УДАЛЕНИЯ повторяющиеся задачи:', jobs2);
		
		// Обновляем статус скрипта в MongoDB
		await updateScriptStatus(telegram_id, resumeId, false);
		console.log(`Удалили задачи проверки и отправки откликов для пользователя ${telegram_id}`);
		
		res.status(200).json({success: true, message: 'Задачи проверки и отправки откликов удалены'});
	} catch (error) {
		console.error('Ошибка при удалении задач проверки и отправки откликов:', error);
		res.status(500).json({error: 'Внутренняя ошибка сервера'});
	}
});

server.listen(3000, () => {
	console.log('Сервер запущен на порту 3000');
});


