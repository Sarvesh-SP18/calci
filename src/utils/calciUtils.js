const operator = (body) => {
	let operation = body.operation.toLowerCase();
	let n1 = body.first_num;
	let n2 = body.last_num;
	if (operation === "add") {
		return n1 + n2;
	} else if (operation === "sub") {
		return n1 - n2;
	} else if (operation === "multi") {
		return n1 * n2;
	} else if (operation === "div") {
		if (n2 !== 0) {
			return n1 / n2;
		} else {
			return "Divide by zero error";
		}
	}
};

const check = (result) => {
	if (!result) {
		return false;
	}
	return true;
};

module.exports = { operator, check };
