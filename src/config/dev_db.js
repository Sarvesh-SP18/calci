const mongoose = require("mongoose");

class connectDB {
	constructor() {
		this._connect();
	}

	_connect() {
		mongoose
			.connect("mongodb://127.0.0.1:27017/calcy", {
				useNewUrlParser: true,
				useUnifiedTopology: true,
			})
			.then(() => {
				console.log("Database connection successful");
			})
			.catch((err) => {
				console.error("Database connection error" + err.message);
			});
	}
}

module.exports = new connectDB();
