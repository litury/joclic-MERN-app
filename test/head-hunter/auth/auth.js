const axios = require('axios');

async function authHeadHunterOAuth2(userId, code) {
	const clientId = process.env.OAUTH2_CLIENT_ID;
	const clientSecret = process.env.OAUTH2_CLIENT_SECRET;
	const redirectUri = process.env.OAUTH2_REDIRECT_URI;
	
	console.log(`Получили токен ${process.env.SECRET_TOKENS}`);
	
	try {
		const response = await axios.post('https://api.hh.ru/token', {
			grant_type: 'authorization_code',
			code: code,
			client_id: clientId,
			client_secret: clientSecret,
			redirect_uri: redirectUri
		}, {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		});
		
		const accessToken = response.data.access_token;
		const refreshToken = response.data.refresh_token;
		const expiresIn = response.data.expires_in;
		
		console.log(`Получили токены: ${accessToken}, ${refreshToken}, ${expiresIn}`);
		
		// Сохраняем токены в базе данных
		// const userAccount = await saveAccountToDB(userId, accessToken, refreshToken, expiresIn);
		// console.log(`Сохранили токены в базе данных: ${userAccount}`)
		//
		// // Добавляем новый аккаунт в массив user модели User с использованием $addToSet и $each
		// const user = await User.findOneAndUpdate({telegram_id: userId}, {$addToSet: {accounts: {$each: [userAccount._id]}}});
		// console.log(`Добавили новый аккаунт в массив accounts модели User: ${user}`)
		//
		// // Добавляем юзера в массив accounts модели User
		// const account = await Account.findOneAndUpdate({_id: userAccount._id}, {$push: {user: user._id}});
		// console.log(`Добавили юзера в массив user модели Account: ${account}`)
		//
		// return {
		// 	isAuthSuccess: true,
		// 	message: 'Авторизация успешна',
		// 	accessToken: accessToken,
		// 	refreshToken: refreshToken,
		// 	expiresIn: expiresIn
		// };
	} catch (error) {
		console.error(error);
		return {isAuthSuccess: false, error: 'Авторизация не удалась. Проверьте правильность введенных данных'};
	}
}

// module.exports = {authHeadHunterOAuth2};

authHeadHunterOAuth2('123', '123');