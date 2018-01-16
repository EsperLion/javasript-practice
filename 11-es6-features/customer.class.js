const { User } = require("./user.class");


class Customer extends User {
	constructor(name, email, password) {
		super(name, email, password);
	}
}

module.exports.Customer = Customer;