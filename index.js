const TelegramBot = require('node-telegram-bot-api');
const token = require('./config');
const routerCommands = require('./router-commands');
const typeorm = require("typeorm");

console.info('Connecting to database...');

typeorm.createConnection({
	type: "mysql",
	host: "localhost",
	port: 3306,
	username: "root",
	password: "",
	database: "telegram",
	synchronize: true,
	logging: false,
	entitySchemas: [
		require("./storage/entity/UserSchema")
	]
}).then(connection => {
	console.info('Connected!');

	const bot = new TelegramBot(token, {polling: true});

	bot.onText(/\/([^\s]+)\s+(.+)/, (msg, match) => {
		console.info('Received a message from the user.');
		
		routerCommands(msg, match, bot);
	});
}).catch(error => {
	console.error("Error: ", error);
});