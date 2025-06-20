import {
  Avatar,
  Box,
  Button,
  Checkbox,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CloseIcon from "@mui/icons-material/Close";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SportsMotorsportsIcon from "@mui/icons-material/SportsMotorsports";
import TourIcon from "@mui/icons-material/Tour";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonIcon from "@mui/icons-material/Person";
import Slide from '@mui/material/Slide';
import useTreekoffStorage from "../../../zustand/storageTreekoff";
import {
  accectOrderOnline,
  checkOutOrder,
  deleteBillOrderOnline,
  getOrderDetail,
} from "../../../api/treekoff";
import { toast, ToastContainer } from "react-toastify";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


function WhatsAppLink({ phoneNumber, message }) {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/85620${phoneNumber}?text=${encodedMessage}`;

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
      {phoneNumber}
    </a>
  );
}

const OnlinePage = () => {
  const orderOnline2 = useTreekoffStorage((s) => s.orderOnline2);
  const staffInfo = useTreekoffStorage((s) => s.staffInfo)
  const removeOrderOnline2Item = useTreekoffStorage(
    (s) => s.removeOrderOnline2Item
  );
  const updateOrderOnline2Item = useTreekoffStorage(
    (s) => s.updateOrderOnline2Item
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedData, setSelectedData] = useState();
  const [selectedRider, setSelectedRider] = useState("");
  const [selecDataCheckout, setSelecDataCheckout] = useState()
  const waitNumber = useTreekoffStorage.getState().getNextWaitNumber(1);
  const riderList = [
    { id: "1", name: "ສົມສັກ" },
    { id: "2", name: "ສຸລິນ" },
    { id: "3", name: "ນະຄອນ" },
  ];
  const [openCheckout, setOpenCheckout] = React.useState(false);

  const handleClickOpenCheckout = (row) => {
    setSelecDataCheckout(row)
    setOpenCheckout(true);
  };

  const handleCloseCheckout = () => {
    setOpenCheckout(false);
  };

  const handleClickOpen = (row) => {
    setSelectedData(row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedData(null);
  };

  const handlePrintOrder = async (row) => {
    try {
      const getOrder = await getOrderDetail(row.id_bill);

      if (getOrder.data.status !== "success") {
        return toast.error("something went wrong !!");
      }

      const fetchedDetail = getOrder.data.data;

      const CheckuserBill = {
        billId: row?.id_bill,
        createAt: row?.billDate,
        userId: row?.customerID,
        username: row?.customerID,
        waitNumber: waitNumber,
        menuDetail: fetchedDetail || [],
        employeeName: staffInfo?.first_name || "",
      };

      setTimeout(() => {
        sessionStorage.setItem("CheckuserBill2", JSON.stringify(CheckuserBill));

        // Open new tab
        window.open("/baristabill", "_blank");
      }, 150);
    } catch (err) {
      console.log(err);
    }
  };

  const handleGetOrder = async (billID) => {
    console.log(billID);
    try {
      const respone = await accectOrderOnline(billID);
      console.log(respone);
      if (respone?.data.status !== "success") {
        toast.error("something wentwrong !");
        return;
      } else {
        updateOrderOnline2Item(billID, {
          isAcceptByStaff: "1",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteOrder = async (id_bill) => {
    if (confirm(`ຕ້ອງການລົບລາຍການນີ້ ${id_bill} ແທ້ບໍ່ ?`)) {
      const respone = await deleteBillOrderOnline(id_bill);
      console.log(respone);

      if (respone.data.status !== "success") {
        return toast.error("Something went wrong ");
      } else {
        removeOrderOnline2Item(id_bill);
      }
    }
  };

  const handleCheckout = async (pay) => {

    const branchID = 1
    const billID = selecDataCheckout?.id_bill
    const cash = Number(selecDataCheckout?.total_balance_kip) + 1000
    const totalSum = selecDataCheckout?.total_balance_kip
    const mobliePay = pay === "BCL ONE PAY" ? 1 : 0

    try {
      const respones = await checkOutOrder(billID, cash, totalSum, staffInfo.id_user, mobliePay, branchID, staffInfo.first_name)
      console.log(respones)
      if (respones.data.status !== "success") {
        return toast.error("Something went wrong !!!")
      }

      const menu = await getOrderDetail(billID)

      if (menu.data.status !== "success") {
        return toast.error("something went wrong !")
      }

      updateOrderOnline2Item(billID, {
        isPaid: "1",
      });
      const detail = menu?.data?.data


      const waitNumber = useTreekoffStorage.getState().getNextWaitNumber(1);

      const CheckuserBill = {
        billId: billID,
        createAt: selecDataCheckout?.billDate,
        userId: selecDataCheckout?.customerID,
        username: selecDataCheckout?.customerFullName,
        point: 0,
        waitNumber,
        payment: pay,
        menuDetail: detail || [],
        totalPrice: totalSum || 0,
        cash: cash || 0,
        employeeName: staffInfo?.first_name || "",
      };



      setTimeout(() => {
        sessionStorage.setItem("CheckuserBill", JSON.stringify(CheckuserBill));

        window.open("/customerbill", "_blank");
      }, 150);

      setOpenCheckout(false)

    } catch (err) {
      console.log(err)
      return
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
                {orderOnline2?.map((row, index) => {
                  const textColor =
                    row?.isAcceptByStaff === "0"
                      ? "rgba(1,1,1,1)"
                      : "rgba(1,1,1,1)";
                  return (
                    <TableRow
                      key={`${row.customerID}-${index}`}
                      sx={{
                        background:
                          row.isAcceptByStaff === "0"
                            ? "rgba(188, 245, 71, 0.58)"
                            : row.isAcceptByStaff === "1" && row.isPaid === "0"
                              ? "rgba(71, 159, 245, 0.58)"
                              : row.isAcceptByStaff === "1" && row.isPaid === "1"
                                ? "rgba(46, 237, 49, 0.58)"
                                : "rgba(188, 245, 71, 0.58)",
                        color:
                          row.isAcceptByStaff === "0"
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
                              <Avatar src={""} />
                              <Typography
                                sx={{
                                  fontFamily: "Noto Sans Lao",
                                  display: "flex",
                                  color: textColor,
                                }}
                              >
                                {row.customerID} | {row.customerFullName}{" "}
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
                                ສົ່ງຫາ{" "}
                                {
                                  <WhatsAppLink
                                    phoneNumber={row.customerPhoneNumber} // international number without plus or spaces
                                    message="Hello"
                                  />
                                }
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
                                ເວລາ:{" "}
                                {row?.billDate
                                  ? new Date(
                                    row?.billDate * 1000
                                  ).toLocaleString("en-GB", {
                                    day: "2-digit",
                                    month: "2-digit",
                                    year: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  })
                                  : "UNKNOW"}
                              </Typography>
                              <Typography
                                sx={{
                                  fontFamily: "Noto Sans Lao",
                                  color: textColor,
                                }}
                              >
                                ເລກບິນ: {row.id_bill}
                              </Typography>
                            </Box>
                            <Box display={"flex"} alignContent={"center"}>
                              <Box
                                sx={{
                                  fontFamily: "Noto Sans Lao",
                                  color: textColor,
                                  display: "flex",
                                  justifyContent: "center",
                                  p: 1,
                                }}
                              >
                                {row.isDelivery === "0" ? (
                                  <Box display={"flex"} gap={1}>
                                    <TourIcon />
                                    <Typography fontFamily={"Noto Sans Lao"}>
                                      ຮັບເອງທີ່ສາຂາ
                                    </Typography>
                                  </Box>
                                ) : (
                                  <Box display={"flex"} flexDirection={"column"}>
                                    <Box display={"flex"} gap={1}>
                                      <DeliveryDiningIcon />
                                      <Typography fontFamily={"Noto Sans Lao"}>
                                        ສົ່ງເຖີງທີ່
                                      </Typography>
                                      <Typography fontFamily={"Noto Sans Lao"}>
                                        {row.villageName}
                                      </Typography>
                                    </Box>
                                    {row.isSetRider === "1" && (
                                      <Box display={"flex"} gap={1}>
                                        <PersonIcon />
                                        <Typography fontFamily={"Noto Sans Lao"}>
                                          {row.riderName}
                                        </Typography>
                                      </Box>
                                    )}
                                  </Box>
                                )}
                              </Box>

                            </Box>
                          </Box>
                        }
                      </TableCell>
                      <TableCell
                        sx={{
                          fontFamily: "Noto Sans Lao",
                          color: textColor,
                          fontSize: 18,
                        }}
                      >
                        {Number(row.total_balance_kip || 0).toLocaleString() ||
                          0}{" "}
                        {"ກີບ"}
                      </TableCell>
                      <TableCell>
                        <Box display={"flex"} gap={1}>
                          <Box
                            display={"flex"}
                            flexDirection={"column"}
                            gap={1}
                          >
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
                            {row.isOnline === "1" &&
                              row.isAcceptByStaff === "1" && (
                                <Button
                                  variant="contained"
                                  onClick={() => handleClickOpen(row)}
                                  
                                  sx={{
                                    fontFamily: "Noto Sans Lao",
                                    color: textColor,
                                    display: row.isPaid === "1" ? "none" : "block"
                                  }}
                                >
                                  <SportsMotorsportsIcon />
                                  ຈັດຂົນສົ່ງ
                                </Button>
                              )}
                          </Box>
                          {row.isAcceptByStaff === "0" ? (
                            <Button
                              variant="contained"
                              color="success"
                              sx={{
                                fontFamily: "Noto Sans Lao",
                                height: "50%",
                                alignSelf: "center",
                              }}
                              onClick={() => handleGetOrder(row.id_bill)}
                            >
                              <LocalPhoneIcon />
                              ຮັບອໍເດີ
                            </Button>
                          ) : (
                            <Button
                              variant="contained"
                              color="success"
                              onClick={() => handleClickOpenCheckout(row)}
                              disabled={row.isPaid === "1" ? true : false}
                              sx={{
                                fontFamily: "Noto Sans Lao",
                                height: "50%",
                                alignSelf: "center",
                              }}
                            >
                              <LocalAtmIcon />
                              ຊຳລະເງີນ
                            </Button>
                          )}

                          <Button
                            variant="contained"
                            color="error"
                            sx={{ height: "50%", alignSelf: "center" }}
                            disabled={row.isPaid === "1" ? true : false}
                            onClick={() => handleDeleteOrder(row.id_bill)}
                          >
                            <DeleteIcon />
                          </Button>
                        </Box>
                      </TableCell>
                      <TableCell>
                        {row.isPaid === "1" && row.isDelivery === "1" ? (
                          <Typography
                            fontFamily={"Noto Sans Lao"}
                            color={textColor}
                          >
                            ຊຳລະແລ້ວ | ຈັດສົ່ງສຳເລັດແລ້ວ
                          </Typography>
                        ) : row.isPaid === "1" && row.isDelivery === "0" ? (
                          <Typography
                            fontFamily={"Noto Sans Lao"}
                            color={textColor}
                          >
                            ຊຳລະແລ້ວ
                          </Typography>
                        ) : row.isAcceptByStaff === "1" &&
                          row.isSetRider === "0" ? (
                          <Typography
                            fontFamily={"Noto Sans Lao"}
                            color={textColor}
                          >
                            ຮັບອໍເດີແລ້ວ ລໍຖ້າຈັດສົ່ງ
                          </Typography>
                        ) : row.isSetRider === "1" ? (
                          <Typography
                            fontFamily={"Noto Sans Lao"}
                            color={textColor}
                          >
                            ກຳລັງຈັດສົ່ງ
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
      <ToastContainer />

      {/** DIALOG */}

      <Dialog
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            component: "form",
            onSubmit: (event) => {
              event.preventDefault();
              console.log("Selected Rider:", selectedRider); // Use this to send to backend
              handleClose();
            },
          },
        }}
      >
        <DialogTitle
          sx={{
            fontFamily: "Noto Sans Lao",
            alignSelf: "center",
            fontWeight: "bold",
            fontSize: 30,
          }}
        >
          ຈັດອໍເດີຈັດສົ່ງ ໃຫ້ໄລເດີ
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ fontFamily: "Noto Sans Lao" }}>
            ເລືອກພະນັກງານສຳລັບລາຍການຈັດສົ່ງຂອງລູກຄ້າໄອດີ{" "}
            {selectedData?.customerID}
          </DialogContentText>
          <TextField
            select
            label="ເລືອກພະນັກງານ"
            fullWidth
            required
            InputLabelProps={{
              sx: {
                fontFamily: "Noto Sans Lao",
                fontSize: 16,
                color: "primary.main",
              },
            }}
            margin="normal"
            value={selectedRider}
            onChange={(e) => setSelectedRider(e.target.value)}
            sx={{ fontFamily: "Noto Sans Lao" }}
          >
            {riderList.map((rider) => (
              <MenuItem
                key={rider.id}
                value={rider.name}
                sx={{ fontFamily: "Noto Sans Lao" }}
              >
                {rider.name}
              </MenuItem>
            ))}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            sx={{ fontFamily: "Noto Sans Lao", fontSize: 20 }}
            variant="contained"
            color="error"
          >
            ຍ້ອນກັບ
          </Button>
          <Button
            type="submit"
            sx={{ fontFamily: "Noto Sans Lao", fontSize: 20 }}
            variant="contained"
            color="success"
          >
            ຈັດອໍເດີ
          </Button>
        </DialogActions>
      </Dialog>

      {/**DIALOG CHECK OUT */}


      <Dialog
        open={openCheckout}
        slots={{
          transition: Transition,
        }}
        keepMounted
        onClose={handleCloseCheckout}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx={{ fontFamily: "Noto Sans Lao", fontSize: 35 }}>{"ເລືອກຊ່ອງທາງການຊຳລະ"}</DialogTitle>
        <DialogActions sx={{ display: 'flex', gap: 3 }}>
          <Button variant="contained" onClick={() => handleCheckout("CASH")} color="success" sx={{ fontFamily: "Noto Sans Lao", fontSize: 30 }}>ຈ່າຍເງີນສົດ</Button>
          <Button
            variant="contained"
            onClick={() => handleCheckout("BCL ONE PAY")}
            startIcon={<img src="/assests/bcel.png" width={35} />}
            sx={{ fontFamily: "Noto Sans Lao", fontSize: 30 }}
          >
            BCEL ONEPAY
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default OnlinePage;
