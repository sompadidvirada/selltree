import {
  Avatar,
  Box,
  Button,
  Card,
  CardMedia,
  Checkbox,
  Dialog,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import CheckIcon from "@mui/icons-material/Check";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DeleteIcon from "@mui/icons-material/Delete";
import useTreekoffStorage from "../../../zustand/storageTreekoff";
import { useNavigate } from "react-router-dom";
import Slide from '@mui/material/Slide';
import { createWaitOrder, deleteBill } from "../../../api/sellTreekoff";
import { toast, ToastContainer } from "react-toastify";
import {
  numberPayment,
  paymentMethod,
} from "../../../broadcast-channel/broadcast";
import { checkOutOrder, deleteProductFromBill } from "../../../api/treekoff";

const CheckBill = () => {
  const brachId = 1;
  const navigate = useNavigate();
  const [selected, setSelected] = useState([]);
  const [moneyReceived, setMoneyReciept] = useState("");
  const [openConfirm, setOpenConfirm] = useState(false);
  const userInfo = useTreekoffStorage((s) => s.userInfo);
  const resetBill = useTreekoffStorage((s) => s.resetBill);
  const employeeInfo = useTreekoffStorage((s) => s.employeeInfo);
  const [rawCash, setRawCash] = useState();
  const customerInfo = useTreekoffStorage((s) => s.customerInfo);
  const staffInfo = useTreekoffStorage((s) => s.staffInfo);
  const resetCustomerInfo = useTreekoffStorage((s) => s.resetCustomerInfo);

  const handleChange = (e) => {
    const raw = e.target.value.replace(/,/g, ""); // remove commas
    setRawCash(raw);
    numberPayment.postMessage(raw);

    if (!isNaN(raw)) {
      const number = parseInt(raw, 10);
      if (!isNaN(number)) {
        setMoneyReciept(number.toLocaleString()); // format with commas
      } else {
        setMoneyReciept("");
      }
    }
  };

  const totalSum = customerInfo?.detail?.reduce(
    (acc, row) => acc + row.menuPriceKIP * row.QTY,
    0
  );

  const confirmClearBill = async () => {
    const billId = userInfo?.bill?.id;

    await deleteBill(billId);
    resetBill();
    navigate("/");
    setOpenConfirm(false);
  };

  const handleClearBill = () => {
    setOpenConfirm(true);
  };

  const handleCheckout = async (pay) => {

    const branchID = 1
    const mobliePay = pay === "BCL ONE PAY" ? 1 : 0
    const cash = pay === "BCL ONE PAY" ? totalSum + 1000 : rawCash

    console.log(cash)
    if (Number(cash) < totalSum || cash === "" || !cash) {
      toast.error("ເງີນທີ່ຮັບຈາກລູກຄ້າ ບໍ່ຖືກຕ້ອງ !!", {
        style: { fontFamily: "'Noto Sans Lao', sans-serif" },
      });
      return;
    }


    try {
      const respones = await checkOutOrder(customerInfo.bill_id, cash, totalSum, staffInfo.id_user, mobliePay, branchID, staffInfo.first_name)
      console.log(respones)
      if (respones.data.status !== "success") {
        return toast.error("Something went wrong !!!")
      }
    } catch (err) {
      console.log(err)
      return
    }

    const waitNumber = useTreekoffStorage.getState().getNextWaitNumber(1);

    const CheckuserBill = {
      billId: customerInfo?.bill_id,
      createAt: userInfo?.bill?.createAt,
      userId: customerInfo?.id_list,
      username: customerInfo?.full_name,
      point: customerInfo?.total_score,
      waitNumber,
      payment: pay,
      menuDetail: customerInfo?.detail || [],
      totalPrice: totalSum || 0,
      cash: cash || 0,
      employeeName: staffInfo?.first_name || "",
    };

    setTimeout(() => {
      sessionStorage.setItem("CheckuserBill", JSON.stringify(CheckuserBill));

      const branchID = 1;

      const detailList = customerInfo?.detail || [];
      resetCustomerInfo({});

      numberPayment.postMessage(0)

      navigate("/sellpage");
      // Open new tab


      window.open("/customerbill", "_blank");
    }, 150);
  };
  useEffect(() => {
    paymentMethod.postMessage("done");
  }, []);

  return (
    <Box>
      {/** STATUS SECTIION */}
      <Box display="flex">
        <CheckIcon
          sx={{ fontSize: 27, alignSelf: "center", color: "rgb(59, 146, 37)" }}
        />
        <Typography fontWeight="bold" fontSize={16} color="rgb(59, 146, 37)">
          PAYMENT CHECKOUT
        </Typography>
      </Box>

      {/**DETAIL USER AND PAYMENT METHOD SECTION */}

      <Box display="flex">
        <Box width="70%">
          <Box
            sx={{
              padding: 4,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Box display="flex" alignContent="center">
                  <Avatar
                    src={customerInfo?.profile_img || ""}
                    alt={customerInfo?.full_name || ""}
                    style={{ width: 80, height: 80 }}
                  />
                </Box>
                <Typography fontFamily="Noto Sans Lao" fontSize={18}>
                  CUSTOMER NAME: {customerInfo?.full_name || "UNKNOW"}
                </Typography>
                <Typography fontSize={18}>
                  CUSTOMER ID: {customerInfo?.id_list || 0}
                </Typography>
                <Typography fontSize={18}>
                  BILL NO : #{customerInfo?.bill_id || 0} | TIME{" "}
                  {userInfo?.bill?.createAt
                    ? new Date(userInfo?.bill?.createAt).toLocaleString(
                      "en-GB",
                      {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      }
                    )
                    : "UNKNOW"}
                </Typography>
                <Typography
                  fontFamily="Noto Sans Lao"
                  fontSize={20}
                  color="rgb(26, 167, 8)"
                  fontWeight="bold"
                >
                  ແຕ້ມສະສົມ:{" "}
                  {Number(customerInfo?.total_score || 0).toLocaleString() ||
                    "01"}{" "}
                  ຄະແນນ
                </Typography>
              </Box>
            </Box>

            <Box>
              <Paper sx={{ marginTop: 0, height: 250, overflow: "auto" }}>
                <Table>
                  <TableHead sx={{ backgroundColor: "rgba(0, 0, 0, 0.29)" }}>
                    <TableRow>
                      <TableCell>ORDERS</TableCell>
                      <TableCell>MENU</TableCell>
                      <TableCell>SWEET</TableCell>
                      <TableCell>Price (KIP)/UNIT</TableCell>
                      <TableCell>QTY</TableCell>
                      <TableCell>TOTAL</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {customerInfo?.detail?.map((row, index) => {
                      return (
                        <TableRow
                          key={row.added_id}
                          sx={{
                            cursor: "pointer",
                            backgroundColor: "#e3f2fd",
                          }}
                        >
                          <TableCell>{index + 1}</TableCell>
                          <TableCell
                            style={{
                              display: "flex",
                              alignItems: "center",
                              fontWeight: "bold",
                            }}
                          >
                            <img
                              src={`https://s3-treekoff-store.s3.ap-southeast-2.amazonaws.com/treekoff-menu-${row.id_menu}.jpg`}
                              alt={row.menuNameENG}
                              style={{
                                width: 40,
                                height: 40,
                                objectFit: "cover",
                                borderRadius: 4,
                                marginRight: 10,
                              }}
                            />
                            {row.menuNameENG}
                          </TableCell>
                          <TableCell sx={{ fontFamily: "Noto Sans Lao" }}>
                            {row.sweet}
                          </TableCell>
                          <TableCell>{row.menuPriceKIP.toLocaleString()}</TableCell>
                          <TableCell>{row.QTY}</TableCell>
                          <TableCell>
                            {(row.menuPriceKIP * row.QTY).toLocaleString()}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </Paper>
            </Box>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignContent="center"
          width="30%"
        >
          <Box>
            <Box display="flex" alignContent="center" justifyContent="center">
              <ArrowForwardIcon sx={{ fontSize: 25, alignSelf: "center" }} />
              <Typography fontFamily={"Noto Sans Lao"} fontSize={25}>
                ຮັບເງິນຈາກລູກຄ້າ:
              </Typography>
            </Box>
            <Box borderBottom="1px solid rgba(1, 1, 1, 0.21)" padding={2}>
              <input
                type="text" // ← change from "number" to "text"
                name="moneyReciept"
                placeholder="ຮັບເງີນຈາກລູກຄ້າ (ກີບ)...."
                value={moneyReceived}
                onChange={handleChange}
                onWheel={(e) => e.target.blur()} // 👈 prevent scroll change
                style={{
                  fontFamily: "Noto Sans Lao",
                  fontSize: "20px",
                  padding: "8px",
                  width: "100%",
                }}
              />
            </Box>
          </Box>
          <Box display="flex" p={2} gap={2} justifyContent="center" height={70}>
            <Button
              variant="contained"
              color="success"
              sx={{ fontFamily: "Noto Sans Lao", fontSize: "18px", width: 100 }}
              onClick={() => handleCheckout("CASH")}
            >
              ຈ່າຍເງີນ
            </Button>
            <Button
              variant="contained"
              sx={{
                fontFamily: "Noto Sans Lao",
                fontSize: "15px",
                width: 150,
                fontWeight: "bold",
                gap: 1,
              }}
              onClick={() => handleCheckout("BCL ONE PAY")}
            >
              {<img src="/assests/bcel.png" style={{ width: 35 }} />}ຈ່າຍຜ່ານ
              ONE PAY
            </Button>
            <Button
              onClick={() => handleClearBill()}
              variant="contained"
              disabled
              color="error"
              sx={{
                fontFamily: "Noto Sans Lao",
                fontSize: "13px",
                fontWeight: "bold",
              }}
            >
              {<DeleteIcon />}ຍົກເລີກບິນ
            </Button>
          </Box>
          <Box marginTop={32}>
            <Box display="flex" justifyContent="center" gap={5}>
              <Typography sx={{ fontSize: 30 }}>CASH</Typography>
              <Typography sx={{ fontSize: 30 }}>
                {moneyReceived ? moneyReceived + " KIP" : "0"}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="center" gap={5}>
              <Typography sx={{ fontSize: 32, color: "red" }}>TOTAL</Typography>
              <Typography sx={{ fontSize: 32, color: "red" }}>
                {totalSum ? totalSum.toLocaleString() + " KIP" : "0"}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="center" gap={5}>
              <Typography sx={{ fontSize: 35, color: "rgb(59, 146, 37)" }}>
                CHANGE
              </Typography>
              <Typography sx={{ fontSize: 35, color: "rgb(59, 146, 37)" }}>
                {(() => {
                  const rawMoney = parseInt(
                    moneyReceived.replace(/,/g, ""),
                    10
                  );
                  if (isNaN(rawMoney)) return "0";
                  return (rawMoney - totalSum).toLocaleString() + " KIP";
                })()}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Dialog open={openConfirm} onClose={() => setOpenConfirm(false)}>
        <Box p={3}>
          <Typography fontFamily="Noto Sans Lao" fontSize={18} mb={2}>
            ທ່ານແນ່ໃຈບໍ່ວ່າຈະຍົກເລີກບິນນີ້?
          </Typography>
          <Box display="flex" justifyContent="flex-end" gap={2}>
            <Button onClick={() => setOpenConfirm(false)} variant="contained">
              <Typography fontFamily="Noto Sans Lao">ຍົກເລີກ</Typography>
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={confirmClearBill}
            >
              <Typography fontFamily="Noto Sans Lao">ຢືນຢັນ</Typography>
            </Button>
          </Box>
        </Box>
      </Dialog>

      <ToastContainer position="top-center" />
    </Box>
  );
};

export default CheckBill;
