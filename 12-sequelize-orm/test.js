const {Sequelize} = require("sequelize");

const sequelize = new Sequelize('test', 'german', 'german', {
	host: 'localhost',
	dialect: 'mysql',

	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
});
