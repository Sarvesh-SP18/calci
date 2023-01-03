const { Router } = require("express");
const calciController = require("../controller/calciController");

const router = Router();

router.post("/operate", calciController.saveOperations);

module.exports = router;
