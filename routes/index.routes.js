const {Router} = require('express');
const {index} = require("../controller/index.controller");

const router = Router();

router.get("/", index);

module.exports = router;    