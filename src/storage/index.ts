import {getConnection, getRepository, Connection} from 'typeorm';
import User from "./entity/User";
import Record from "./entity/Record";

const add = async (msg: any, text: string, callback) => {
	const connection: Connection = getConnection();
	const {id, first_name: firstname, last_name: lastname} = msg.from;
	const userRepository = getRepository(User);
	const record = new Record(text);

	try {
		let user = await userRepository.findOne({user_telegram_id: id});

		if(!user) {
			user = new User(id, firstname, lastname);
			user.records = [];
		}
		
		user.records = [record, ...user.records];

		await connection.manager.save(user);

		console.info(`Message from ${user.firstname} was successfully added.`);
		callback(`Message from ${user.firstname} was successfully added.`);
	} catch (error) {
		callback(error.message);
		console.error("Error: ", error.message);
	}
};

export default {
	add
};