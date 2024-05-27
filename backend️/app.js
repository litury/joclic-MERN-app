const express = require('express');
const http = require('http');
const cors = require('cors');
const {handleAuth} = require('./head-hunter/auth/authController');

const app = express();
const server = http.createServer(app);

// Разрешение CORS
app.use(cors({
	origin: ["https://tg-mini-app.local", "https://hhcheckerfront-1ket.vercel.app", "https://litury-hhcheckerfront-4372.twc1.net"], // разрешаем домен клиента
	credentials: true, // разрешаем куки
	methods: ["GET", "POST", "PUT", "DELETE"], // разрешаем методы
	allowedHeaders: ["Content-Type", "Authorization"] // разрешаем заголовки
}));


app.use(express.json());

app.get('/redirect', handleAuth);


server.listen(3001, () => {
	console.log('Сервер запущен на порту 3001');
});


