const express = require('express');
const http = require('http');
const cors = require('cors');
const {getResumes} = require('./head-hunter/resumes/resumesController');

const app = express();
const server = http.createServer(app);

// Разрешение CORS
app.use(cors({
	origin: ["https://tg-mini-app.local", "https://hhcheckerfront-1ket.vercel.app", "https://litury-hhcheckerfront-4372.twc1.net"],
	credentials: true,
	methods: ["GET", "POST", "PUT", "DELETE"],
	allowedHeaders: ["Content-Type", "Authorization"]
}));

const {handleAuth, checkAuth} = require('./head-hunter/auth/authController');
const {autoApply} = require('./head-hunter/auto-apply/autoApplyController');
const {getProfile} = require('./head-hunter/profile/profileController')
const {applyToVacanciesController} = require('./head-hunter/timed-apply/timedApplyController');


app.use(express.json());

app.get('/redirect', handleAuth);
app.post('/free-apply', autoApply);
app.get('/check-auth', checkAuth);
app.get('/profile', getProfile)
app.post('/apply', applyToVacanciesController)


server.listen(3001, () => {
	console.log('Сервер запущен на порту 3001');
});


