// Filename: responseCheckerQueue.js

const IORedis = require('ioredis');
const {Queue, Worker} = require('bullmq');
const {processVacancyApplications} = require('../head-hunter/timed-apply/utils');
require('dotenv').config();

const connection = new IORedis({
	host: process.env.TASKFORCE_CONNECTOR_HOST,
	port: process.env.TASKFORCE_CONNECTOR_PORT,
	username: process.env.TASKFORCE_CONNECTOR_USERNAME,
	password: process.env.TASKFORCE_CONNECTOR_PASSWORD,
	maxRetriesPerRequest: null,
	enableReadyCheck: false
});

connection.on('connect', () => {
	console.log('Успешно подключились к Redis');
});

connection.on('error', (err) => {
	console.error('Ошибка подключения к Redis:', err);
});

// Создание новой очереди
const myQueue = new Queue('responseCheckQueue', {
	connection,
	options: {
		priority: 1
	}
});

const addApply = async (telegram_id, userEmail) => {
	const jobName = `sendResponse-${telegram_id}-${userEmail}`;
	const job = await myQueue.add(jobName, {telegram_id, userEmail}, {
		priority: 3,
		attempts: 3,
		delay: 0,
		backoff: {
			type: 'exponential',
			delay: 1000,
			maxDelay: 60000,
		},
	});
	return job;
};

const addRepeatApply = async (resume_id, telegram_id, maxApplies) => {
	const jobName = `sendApply-${telegram_id}-${resume_id}`;
	const job = await myQueue.add(jobName, {telegram_id, resume_id}, {
		priority: 3,
		repeat: {
			cron: '0 12 * * *',
			tz: 'Europe/Moscow'
		},
		attempts: 3,
		delay: 0,
		backoff: {
			type: 'exponential',
			delay: 1000,
			maxDelay: 60000,
		},
		jobId: `sendApply-${telegram_id}-${resume_id}`
	});
	return job;
};

// Обработчик задачи
const worker = new Worker('responseCheckQueue', async job => {
	if (/^sendApply-/.test(job.name)) {
		try {
			const {resume_id, telegram_id, maxApplies} = job.data;
			await processVacancyApplications(resume_id, telegram_id, maxApplies);
		} catch (error) {
			console.error(`Ошибка при выполнении задачи ${job.id}:`, error);
			await job.moveToFailed(error);
		}
	}
}, {connection, concurrency: 1});

module.exports = {myQueue, connection, addRepeatApply};
