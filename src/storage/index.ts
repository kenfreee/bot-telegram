import * as typeorm from 'typeorm';
import User from "./entity/User";
import Record from "./entity/Record";

const add = (msg: any, text: string, callback): void => {
	const connection: typeorm.Connection = typeorm.getConnection();
	const {first_name: firstname, last_name: lastname} = msg.from;
	const userStorage = connection.getRepository(User);

	userStorage.findOne({firstname})
		.then(user => {
			if (!user) {
				const user = new User();
				user.firstname = firstname;
				user.lastname = lastname;

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

export default {
	add
};