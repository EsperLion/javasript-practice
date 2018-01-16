const { User } = require("./user.class");


class Admin extends User {

	constructor(name, email, age) {
		super(name, email, age);
	}

}

module.exports.Admin = Admin;