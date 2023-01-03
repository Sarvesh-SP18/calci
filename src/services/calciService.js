const Calci = require("../models/calciModel");
const calciUtil = require("../utils/calciUtils");

const create = async (body) => {
	let result = calciUtil.operator(body);

	const calci = new Calci({ ...body, result });
	const calciRes = await calci.save();

	if (!calciUtil.check(calciRes)) {
		throw {
			message: "Unable to create the data",
		};
	}

	return {
		calciRes,
	};
};

module.exports = { create };
