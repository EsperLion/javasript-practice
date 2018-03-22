var chai = require("chai"),
	chaiHttp = require("chai-http"),
	mocha = require("mocha");

var app = require("./server");

var expect = chai.expect;

chai.use(chaiHttp);

var agent = chai.request.agent(app.app);

mocha.describe('Express app tests', () => {
	// before((done) => {
	// 	app
	// 		.create()
	// 		.then(() => {
	// 			done();
	// 			agent = chai.request.agent(app.app);
	// 		});
	// });

	mocha.describe("/GET get user list", () => {
		mocha.it("should send users list", (done) => {

			agent
				.get("/get-info")
				.send({})
				.end((err, res) => {
					console.log(res.body);
					done();
				});

		});
	});

	mocha.describe("/POST add user to user list and return user list", () => {
		mocha.it("should send users lhbhbist", (done) => {

			agent
				.post("/add-user")
				.send({})
				.end((err, res) => {
					console.log(res.body);
					done();
				});

		});
	});
});

var chai = require("chai"),
	chaiHttp = require("chai-http"),
	mocha = require("mocha");

var app = require("./server");

var expect = chai.expect;

chai.use(chaiHttp);

var agent = chai.request.agent(app.app);

mocha.describe('Express app tests', () => {
	// before((done) => {
	// 	app
	// 		.create()
	// 		.then(() => {
	// 			done();
	// 			agent = chai.request.agent(app.app);
	// 		});
	// });

	mocha.describe("/GET get user list", () => {
		mocha.it("should send users list", (done) => {

			agent
				.get("/get-info")
				.send({})
				.end((err, res) => {
					console.log(res.body);
					done();
				});

		});
	});

	mocha.describe("/POST add user to user list and return user list", () => {
		mocha.it("should send users lhbhbist", (done) => {

			agent
				.post("/add-user")
				.send({})
				.end((err, res) => {
					console.log(res.body);
					done();
				});

		});
	});
});

var chai = require("chai"),
	chaiHttp = require("chai-http"),
	mocha = require("mocha");

var app = require("./server");

var expect = chai.expect;

chai.use(chaiHttp);

var agent = chai.request.agent(app.app);

mocha.describe('Express app tests', () => {
	// before((done) => {
	// 	app
	// 		.create()
	// 		.then(() => {
	// 			done();
	// 			agent = chai.request.agent(app.app);
	// 		});
	// });

	mocha.describe("/GET get user list", () => {
		mocha.it("should send users list", (done) => {

			agent
				.get("/get-info")
				.send({})
				.end((err, res) => {
					console.log(res.body);
					done();
				});

		});
	});

	mocha.describe("/POST add user to user list and return user list", () => {
		mocha.it("should send users lhbhbist", (done) => {

			agent
				.post("/add-user")
				.send({})
				.end((err, res) => {
					console.log(res.body);
					done();
				});

		});
	});
});
