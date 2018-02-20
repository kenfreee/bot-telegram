const storage = require('../storage');

module.exports = function(msg, match, bot) {
	const command = match[1];
	const data = match[2];

	switch(command) {
		case 'add':
			storage.add(msg, data, function(message) {
				bot.sendMessage(msg.chat.id, message);
			});
			break;
		case 'list':
			break;
		default: bot.sendMessage(msg.chat.id, 'Command no found!');
	}
};