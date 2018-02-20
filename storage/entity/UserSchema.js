const User = require("../model/User").User;

module.exports = {
    target: User,
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        firstname: {
            type: "varchar"
        },
        lastname: {
            type: "varchar"
        }
    }
};