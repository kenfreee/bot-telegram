const storage = require('../storage');

module.exports = function(msg, match, bot) {
	const command = match[1];
	const data = match[2];

	switch(command) {
		case 'add':
			storage.add(msg, data, function() {
				bot.sendMessage(msg.chat.id, 'Record was successfully added!');
			});
			break;
		case 'list':
			break;
		default: bot.sendMessage(msg.chat.id, 'Command no found!');
	}
};