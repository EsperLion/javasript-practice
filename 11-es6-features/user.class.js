class User {

	constructor(name, email, password) {
		this.name = name;
		this.email = email;
		this.password = password;
	}

	showInfo() {
		return `User name: ${this.name}, Email: ${this.email}, Password: ${this.password}`;
	}

}

module.exports.User = User;