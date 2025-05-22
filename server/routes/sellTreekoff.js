const express = require("express");
const router = express.Router();
const { CreateUserTreekoff, getUser, createBill } = require("../controller/sellTreekoff");

router.post("/createusertreekoff", CreateUserTreekoff);
router.get("/getuser/:id", getUser)
router.post("/createbill", createBill)

module.exports = router;