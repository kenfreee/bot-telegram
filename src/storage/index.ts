import {getConnection, Connection} from 'typeorm';
import User from "./entity/User";
import Record from "./entity/Record";

const add = async (msg: any, text: string, callback) => {
	const connection: Connection = getConnection();
	const {id, first_name: firstname, last_name: lastname} = msg.from;
	const user = new User(id, firstname, lastname);
	
	try {
		await connection.manager.save(user);

		console.info(`User named ${user.firstname} was successfully added.`);
		callback(`User named ${user.firstname} was successfully added.`);
	} catch (error) {
		callback(`User named ${user.firstname} already exists.`);
		console.error("Error: ", `User named ${user.firstname} already exists.`);
	}
};

export default {
	add
};