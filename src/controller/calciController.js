const calciService = require("../services/calciService");

const saveOperations = async (req, res) => {
	try {
		const response = await calciService.create(req.body);
		return res.status(201).send(response);
	} catch (err) {
		return res.json(err.message);
	}
};

module.exports = { saveOperations };
