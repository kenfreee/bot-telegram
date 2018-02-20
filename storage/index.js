const getConnection = require("typeorm").getConnection;
const User = require("./model/User").User;

module.exports.add = function(msg, data, callback) {
	const connection = getConnection();
	const {first_name: firstname, last_name: lastname} = msg.from;
	const userStorage = connection.getRepository(User);

	userStorage.findOne({firstname})
		.then(user => {
			if (!user) {
				const user = new User(0, firstname, lastname);

				return connection.manager
					.save(user)
					.then(user => {
	                	callback(`User named ${user.firstname} was successfully added.`);
	                	console.info(`User named ${user.firstname} was successfully added.`);
	            	});
			} else {
				return Promise.reject(`User named ${user.firstname} already exists.`);
			}
		}).catch(error => {
    		callback(error);
    		console.error("Error: ", error);
		});
};