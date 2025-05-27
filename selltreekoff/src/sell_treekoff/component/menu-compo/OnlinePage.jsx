import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CloseIcon from "@mui/icons-material/Close";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TourIcon from "@mui/icons-material/Tour";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import useTreekoffStorage from "../../../zustand/storageTreekoff";
import { createBill, createWaitOrder } from "../../../api/sellTreekoff";

const OnlinePage = () => {
  const orderOnline = useTreekoffStorage((s) => s.orderOnline);
  const removeOrderOnline = useTreekoffStorage((s) => s.removeOrderOnline);
  const replaceOrderOnline = useTreekoffStorage((s) => s.replaceOrderOnline);
  const employeeInfo = useTreekoffStorage((s) => s.employeeInfo);
  const totalPrice = orderOnline
    ? orderOnline.billDetail?.reduce((acc, row) => acc + row.price * row.qty, 0)
    : 0;

  const [searchTerm, setSearchTerm] = useState("");
const filteredOrders = searchTerm
  ? orderOnline.filter(
      (order) =>
        order.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.id.toString().includes(searchTerm)
    )
  : orderOnline;

  const handlePrintOrder = (row) => {

    const CheckuserBill = {
      billId: row?.billNumber,
      createAt: row?.createAt,
      userId: row?.id,
      username: row?.username,
      waitNumber: row?.waitOrder,
      menuDetail: row?.billDetail || [],
      employeeName: employeeInfo?.username || "",
    };

    setTimeout(() => {
      sessionStorage.setItem("CheckuserBill2", JSON.stringify(CheckuserBill));

      // Open new tab
      window.open("/baristabill", "_blank");
    }, 150);
  };

  const handleGetOrder = async (billNumber) => {
    try {
      const orderWait = await createWaitOrder(1);
      const updatedOrders = orderOnline.map((order) =>
        order.billNumber === billNumber
          ? { ...order, waitOrder: orderWait.data.waitNumber, orderStatus: "ສຳເລັດ" }
          : order
      );
      replaceOrderOnline(updatedOrders);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteOrder = (billNumber) => {
    if (confirm(`ARE YOU SURE YOU WANT TO DELETE THIS BILL ${billNumber}?`)) {
      removeOrderOnline(billNumber);
    }
  };

  return (
    <Box>
      {/**TITLE SECTION */}
      <Box
        sx={{
          width: "100%",
          p: 2,
          display: "flex",
          justifyContent: "center",
          borderBottom: "1px solid",
        }}
      >
        <PhoneAndroidIcon />
        <Typography fontFamily="Noto Sans Lao">
          ລາຍການສັ່ງຊື້ຜ່ານ Website/Application:
        </Typography>
      </Box>

      {/**BUTTON AND SEARCH SECTION */}

      <Box display={"flex"} padding={2} justifyContent={"space-between"}>
        <Button
          variant="contained"
          color="error"
          sx={{
            fontFamily: "Noto Sans Lao",
            display: "flex",
            justifySelf: "center",
            height: 60,
            alignSelf: "center",
          }}
        >
          <DeleteForeverIcon />
          ລ້າງແຈ້ງເຕືອນ
        </Button>
        <Box sx={{ p: 2, display: "flex", flexDirection: "column", gap: 2 }}>
          <Box display={"flex"} gap={2}>
            <Box sx={{ alignSelf: "center" }}>
              <input
                type="text"
                placeholder="ລະບຸຂໍ້ມູນລູກຄ້າ..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  height: 60,
                  width: 300,
                  fontSize: 25,
                  fontFamily: "Noto Sans Lao",
                }}
              />
            </Box>
            <Button
              variant="contained"
              sx={{ display: "flex", alignContent: "center" }}
            >
              <SearchIcon />
              <Typography fontFamily={"Noto Sans Lao"} fontSize={30}>
                ຄົ້ນຫາ
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>

      {/** TABLE CUSTOMER ORDER SECTION */}

      <Box padding={2}>
        <Box>
          <Paper sx={{ marginTop: 4, height: "100%", overflow: "auto" }}>
            <Table>
              <TableHead sx={{ backgroundColor: "rgba(0, 0, 0, 0.29)" }}>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>CUSTOMER ID</TableCell>
                  <TableCell>
                    {
                      <Typography fontFamily={"Noto Sans Lao"}>
                        ລາຍລະອຽດ
                      </Typography>
                    }
                  </TableCell>
                  <TableCell>TOTAL PRICE</TableCell>
                  <TableCell>UPDATE</TableCell>
                  <TableCell>STATUS</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredOrders?.map((row, index) => {
                  const textColor =
                    row.orderStatus === "ລໍຖ້າຮັບ"
                      ? "rgb(0, 0, 0)"
                      : "rgb(223, 223, 223)";
                  return (
                    <TableRow
                      key={`${row.id}-${row.billNumber}-${index}`}
                      sx={{
                        background:
                          row.orderStatus === "ລໍຖ້າຮັບ"
                            ? "rgb(202, 189, 0)"
                            : row.orderStatus === "ສຳເລັດ"
                            ? "rgb(0, 104, 9)"
                            : "rgb(202, 189, 0)",
                        color:
                          row.orderStatus === "ລໍຖ້າຮັບ"
                            ? "rgb(0, 0, 0)"
                            : "rgb(223, 223, 223)",
                      }}
                    >
                      <TableCell sx={{ color: textColor }}>
                        {index + 1}
                      </TableCell>
                      <TableCell>
                        {
                          <Box
                            display={"flex"}
                            flexDirection={"column"}
                            justifyContent={"center"}
                          >
                            <Box
                              display={"flex"}
                              gap={1}
                              alignContent={"center"}
                            >
                              <Avatar src={row.image} />
                              <Typography
                                sx={{
                                  fontFamily: "Noto Sans Lao",
                                  display: "flex",
                                  color: textColor,
                                }}
                              >
                                {row.id} | {row.username}{" "}
                                <CloseIcon sx={{ color: "red" }} />
                              </Typography>
                            </Box>
                            <Box display={"flex"} color={textColor}>
                              <WhatsAppIcon />
                              <Typography
                                sx={{
                                  fontFamily: "Noto Sans Lao",
                                  color: "rgb(0, 26, 255)",
                                }}
                              ></Typography>
                              <Typography fontFamily={"Noto Sans Lao"}>
                                ສົ່ງຫາ {row.phonenumber}
                              </Typography>
                            </Box>
                          </Box>
                        }
                      </TableCell>
                      <TableCell>
                        {
                          <Box display={"flex"} flexDirection={"column"}>
                            <Box
                              sx={{
                                borderBottom:
                                  "1px solid rgba(255, 255, 255, 0.77)",
                              }}
                            >
                              <Typography
                                sx={{
                                  fontFamily: "Noto Sans Lao",
                                  color: textColor,
                                }}
                              >
                                {" "}
                                ເວລາ: {row.orderTime}
                              </Typography>
                              <Typography
                                sx={{
                                  fontFamily: "Noto Sans Lao",
                                  color: textColor,
                                }}
                              >
                                ເລກບິນ: {row.billNumber}
                              </Typography>
                            </Box>
                            <Box display={"flex"} alignContent={"center"}>
                              <Typography
                                sx={{
                                  fontFamily: "Noto Sans Lao",
                                  color: textColor,
                                  display: "flex",
                                  justifyContent: "center",
                                  p: 1,
                                }}
                              >
                                {row.takeType === "ຮັບເອງທີ່ສາຂາ" ? (
                                  <TourIcon />
                                ) : (
                                  <DeliveryDiningIcon />
                                )}{" "}
                                {row.takeType}
                              </Typography>
                            </Box>
                          </Box>
                        }
                      </TableCell>
                      <TableCell
                        sx={{ fontFamily: "Noto Sans Lao", color: textColor }}
                      >
                        {totalPrice?.toLocaleString() || 0}
                      </TableCell>
                      <TableCell>
                        <Box display={"flex"} gap={1}>
                          <Button
                            variant="contained"
                            onClick={() => handlePrintOrder(row)}
                            sx={{
                              fontFamily: "Noto Sans Lao",
                              color: textColor,
                            }}
                          >
                            <LocalPrintshopIcon />
                            ພິມເມນູ
                          </Button>
                          <Button
                            variant="contained"
                            color="success"
                            sx={{ fontFamily: "Noto Sans Lao" }}
                            onClick={() => handleGetOrder(row.billNumber)}
                          >
                            <LocalPhoneIcon />
                            ຮັບອໍເດີ
                          </Button>
                          <Button
                            variant="contained"
                            color="error"
                            disabled={row.orderStatus === "ສຳເລັດ"}
                            onClick={() => handleDeleteOrder(row.billNumber)}
                          >
                            <DeleteIcon />
                          </Button>
                        </Box>
                      </TableCell>
                      <TableCell>
                        {row.orderStatus === "ສຳເລັດ" &&
                        row.takeType === "ຈັດສົ່ງ" ? (
                          <Typography
                            fontFamily={"Noto Sans Lao"}
                            color={textColor}
                          >
                            ຊຳລະແລ້ວ | ຈັດສົ່ງສຳເລັດແລ້ວ
                          </Typography>
                        ) : row.orderStatus === "ສຳເລັດ" ? (
                          <Typography
                            fontFamily={"Noto Sans Lao"}
                            color={textColor}
                          >
                            ຊຳລະແລ້ວ
                          </Typography>
                        ) : (
                          <Typography
                            fontFamily={"Noto Sans Lao"}
                            color={textColor}
                          >
                            ລໍຖ້າຮັບອໍເດີ
                          </Typography>
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Paper>
        </Box>

        {/** SEARCH CUSTOMER DETAIL SECTION */}
      </Box>
    </Box>
  );
};

export default OnlinePage;
