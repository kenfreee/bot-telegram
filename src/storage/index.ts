import * as typeorm from 'typeorm';
import User from "./entity/User";
import Record from "./entity/Record";

const add = (msg: any, text: string, callback): void => {
	const connection: typeorm.Connection = typeorm.getConnection();
	const {id, first_name: firstname, last_name: lastname} = msg.from;
	const user = new User(id, firstname, lastname);
	
	connection.manager
		.save(user)
		.then(user => {
        	callback(`User named ${user.firstname} was successfully added.`);
        	console.info(`User named ${user.firstname} was successfully added.`);
    	}).catch(error => {
    		callback(`User named ${user.firstname} already exists.`);
    		console.error("Error: ", `User named ${user.firstname} already exists.`);
    	});
};

export default {
	add
};