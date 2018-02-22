import * as TelegramBot from 'node-telegram-bot-api';
import storage from '../storage';

export default (msg: any, match: string[], bot: TelegramBot) => {
	const command: string = match[1];
	const text: string = match[2];

	switch(command) {
		case 'add':
			storage.add(msg, text, (message: string): void => {
				bot.sendMessage(msg.chat.id, message);
			});
			break;
		case 'list':
			break;
		default: bot.sendMessage(msg.chat.id, 'Command no found!');
	}
};