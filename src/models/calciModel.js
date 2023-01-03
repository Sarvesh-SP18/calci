const mongoose = require("mongoose");

const calciSchema = new mongoose.Schema(
	{
		first_num: { type: Number, required: true },
		last_num: { type: Number, required: true },
		operation: { type: String, required: true },
		result: { type: String, required: true },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Calci", calciSchema);
