const express = require("express");
const router = express.Router();
const { CreateUserTreekoff, getUser, createBill, deleteBill, createWaitOrder, createBrach, orderOnline, testPost } = require("../controller/sellTreekoff");

router.post("/createusertreekoff", CreateUserTreekoff);
router.get("/getuser/:id", getUser)
router.post("/createbill", createBill)
router.delete("/deletebill/:id", deleteBill)
router.post("/createwaitorder", createWaitOrder)
router.post("/createbrach", createBrach)
router.post(`/testpost`, testPost)



{/** SOCKET IO ROUTE */}
router.post("/orderonline", orderOnline)

module.exports = router;