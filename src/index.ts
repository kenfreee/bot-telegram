import * as typeorm from 'typeorm';
import * as TelegramBot from 'node-telegram-bot-api';
import token from './config';
import routerCommands from './router-commands';

console.info('Connecting to database...');

typeorm.createConnection().then((connection: typeorm.Connection) => {
	console.info('Connected!');

	const bot: TelegramBot = new TelegramBot(token, {polling: true});

	bot.onText(/\/([^\s]+)\s+(.+)/, (msg: any, match: string[]): void => {
		console.info('Received a message from the user.');
		
		routerCommands(msg, match, bot);
	});
}).catch(error => {
	console.error("Error: ", error);
});