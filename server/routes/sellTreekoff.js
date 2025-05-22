const express = require("express");
const router = express.Router();
const { CreateUserTreekoff, getUser, createBill, deleteBill } = require("../controller/sellTreekoff");

router.post("/createusertreekoff", CreateUserTreekoff);
router.get("/getuser/:id", getUser)
router.post("/createbill", createBill)
router.delete("/deletebill/:id", deleteBill)

module.exports = router;