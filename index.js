const TelegramBot = require('node-telegram-bot-api');
const token = require('./config');
const routerCommands = require('./router-commands');

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/([^\s]+)\s+(.+)/, (msg, match) => {
	routerCommands(msg, match, bot);
});