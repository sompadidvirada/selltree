const express = require("express");
const router = express.Router();
const { CreateUserTreekoff } = require("../controller/sellTreekoff");

router.get("/createusertreekoff", CreateUserTreekoff);

module.exports = router;