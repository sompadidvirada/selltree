import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid2,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import useTreekoffStorage from "../../../zustand/storageTreekoff";
import { useEffect, useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { createBill, registerUser } from "../../../api/sellTreekoff";
import { ToastContainer } from "react-toastify";
import {
  billUserChannel,
  orderChannel,
  paymentMethod,
} from "../../../broadcast-channel/broadcast";
import {
  createBillWithUser,
  getUserBtPhone,
  searchCus,
} from "../../../api/treekoff";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import Dialog from "@mui/material/Dialog";
import { motion } from "framer-motion";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Backdrop, CircularProgress } from "@mui/material";

const SignupSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  phonenumber: Yup.string().required("Required"),
});

const Customer = () => {
  const [loading, setLoading] = useState(false);
  const [searchCustomer, setSearchCustomer] = useState("");
  const userInfo = useTreekoffStorage((s) => s.userInfo);
  const setUserInfo = useTreekoffStorage((s) => s.setUserInfo);
  const resetBill = useTreekoffStorage((s) => s.resetBill);
  const userBill = useTreekoffStorage((s) => s.userBill);
  const navigate = useNavigate();
  const hasHandled9001 = useRef(false);
  const customerInfo = useTreekoffStorage((state) => state.customerInfo);
  const staffInfo = useTreekoffStorage((state) => state.staffInfo);
  const setCustomerInfo = useTreekoffStorage((state) => state.setCustomerInfo);
  const resetCustomer = useTreekoffStorage((state) => state.resetCustomerInfo);
  const [alertError, setAlertError] = useState(false);

  useEffect(() => {
    if (userInfo?.id === 9001 && !hasHandled9001.current) {
      resetBill();
      hasHandled9001.current = true;
    }
  }, [userInfo]);

  const handleRegister = async (values, resetForm) => {
    console.log(values);
    resetForm();
    handleClose();
  };

  const createWithUser = async () => {
    try {
      const branchId = 1;

      const createBil = await createBillWithUser(
        customerInfo?.id_list,
        staffInfo?.first_name,
        branchId
      );

      const updatedCustomerInfo = {
        ...customerInfo,
        bill_id: createBil.data.bill_id,
        bill_create_date: createBil.data.createdDate,
        detail: [],
      };

      setCustomerInfo(updatedCustomerInfo);

      billUserChannel.postMessage(updatedCustomerInfo);
    } catch (err) {
      console.log(err);
    }

    navigate("/sellpage/productdetail");
  };

  const handleCreateNoUser = async () => {
    hasHandled9001.current = true; // Skip the effect once

    const defaultUser = {
      id: 9001,
      username: "USER_FOR_BRANCH_NO_ID_1",
      image: "",
      phonenumber: "",
      point: 0,
      totalSpent: 0,
      createDate: "",
    };

    const res = await createBill(9001);
    const billData = res?.data;
    const combinedUser = {
      ...defaultUser,
      bill: billData,
    };

    {
      /** set local storage */
    }

    setUserInfo(combinedUser);

    {
      /** send broadcast channel */
    }

    orderChannel.postMessage(combinedUser);

    setTimeout(() => {
      navigate("/productdetail");
    }, 200);
  };

  const handleSearch = async (value) => {
    setAlertError(false);

    if (!value || value === "") {
      return;
    }

    setLoading(true); // Show loading

    try {
      let customerSeacrh;

      if (value.length >= 8) {
        customerSeacrh = await getUserBtPhone(value);
      } else {
        customerSeacrh = await searchCus(value);
      }

      if (
        customerSeacrh?.data === "" ||
        customerSeacrh?.data?.status === "error"
      ) {
        resetCustomer("");
        setSearchCustomer("");
        orderChannel.postMessage(null);
        setAlertError(true);
        return;
      }

      const responeData = customerSeacrh.data.data;

      const meachData = {
        ...responeData[0],
        ...responeData[1],
      };

      setCustomerInfo(meachData);
      orderChannel.postMessage(meachData);
      setSearchCustomer("");
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false); // Hide loading
    }
  };

  useEffect(() => {
    paymentMethod.postMessage(null);
  }, []);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Box
        display="flex"
        flexDirection="column"
        gap="40px"
        minHeight={610}
        justifyContent={"space-between"}
      >
        {/* Seacrh Customer Section. */}

        <Box>
          {/* Search Area */}
          <Box display="flex" alignContent="center" width={"100%"}>
            <SearchIcon sx={{ fontSize: 35 }} />
            <Typography
              fontFamily={"Noto Sans Lao"}
              fontSize={25}
              sx={{ alignItems: "center" }}
            >
              ຄົ້ນຫາບັນຊີລູກຄ້າ
            </Typography>
          </Box>
          <Box display="flex" gap="10px" width={"100%"}>
            <input
              type="number"
              name="seacrhCustomer"
              required
              min={1}
              value={searchCustomer}
              onChange={(e) => setSearchCustomer(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault(); // 🛑 Prevent form from refreshing
                  handleSearch(searchCustomer);
                }
              }}
              placeholder="ລະບຸຂໍ້ມູນລູກຄ້າ..."
              onWheel={(e) => e.target.blur()} // ⛔ Prevent scroll changes
              style={{
                fontFamily: "Noto Sans Lao",
                fontSize: "20px",
                padding: "8px",
                width: "30%",
              }}
            />
            <Button
              variant="outlined"
              sx={{ height: 50 }}
              onClick={() => handleSearch(searchCustomer)}
            >
              <SearchIcon sx={{ fontSize: 20 }} />
              <Typography fontFamily={"Noto Sans Lao"} fontWeight="bold">
                ຄົ້ນຫາ
              </Typography>
            </Button>
            <Button
              variant="contained"
              sx={{ height: 50, bgcolor: "#3c8dbc" }}
              onClick={handleCreateNoUser}
              disabled
            >
              <Typography fontFamily={"Noto Sans Lao"} fontWeight="bold">
                ສ້າງບິນໃຫ່ມບໍ່ມີໄອດີ
              </Typography>
            </Button>

            <Button
              variant="contained"
              sx={{ fontFamily: "Noto Sans Lao", fontSize: 25, height: 50 }}
              onClick={handleClickOpen}
            >
              ສະໝັກສະມາຊິກ
            </Button>
          </Box>
          {/** Alert MESSAGE */}
          {alertError && (
            <motion.div
              key={customerInfo.id_list}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Stack sx={{ width: "100%", mt: 3 }} spacing={50}>
                <Alert
                  severity="error"
                  sx={{
                    fontFamily: "Noto Sans Lao",
                    height: "150px",
                    fontSize: 50,
                  }}
                >
                  <AlertTitle
                    sx={{ fontSize: 30, fontFamily: "Noto Sans Lao" }}
                  >
                    ບໍ່ຖືກຕ້ອງ !
                  </AlertTitle>
                  ໄອດີ ຫຼີເບີໂທນີ້ ບໍ່ມີໃນລະບົບ
                </Alert>
              </Stack>
            </motion.div>
          )}
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
          >
            <CircularProgress color="inherit" />
          </Backdrop>

          {/** Output Area */}

          {customerInfo && Object.keys(customerInfo).length > 0 && (
            <motion.div
              key={customerInfo.id_list}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Card
                sx={{
                  display: "flex",
                  marginTop: 5,
                  backgroundColor: "rgba(46, 46, 46, 0.14)",
                  width: "95%",
                  justifySelf: "center",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    background:
                      "linear-gradient(to bottom, rgba(201, 201, 201, 0.7), rgba(255, 255, 255, 0.5))",
                    height: 400,
                    width: "30%",
                  }}
                >
                  <Avatar
                    src={`https://treekoff.com/bigtree_admin/${customerInfo?.profile_img}`}
                    sx={{ width: "80%", height: "80%", alignSelf: "center" }}
                  />
                </CardContent>

                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "40%",
                    alignItems: "flex-start",
                    gap: 1.5,
                  }}
                >
                  <Typography
                    fontSize={30}
                    component="div"
                    fontFamily={"Noto Sans Lao"}
                    width={"50%"}
                  >
                    ຂໍ້ມູນລູກຄ້າ
                  </Typography>

                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    width={"95%"}
                  >
                    <Box sx={{ width: "40%" }}>
                      <Typography
                        fontFamily={"Noto Sans Lao"}
                        fontSize={25}
                        fontWeight={"bold"}
                        color="rgba(1, 1, 1, 0.33)"
                      >
                        ຊື່ ນາມສະກຸນ
                      </Typography>
                    </Box>
                    <Box sx={{ width: "60%" }}>
                      <Typography fontFamily={"Noto Sans Lao"} fontSize={25}>
                        {customerInfo.full_name}
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    width={"95%"}
                  >
                    <Box sx={{ width: "40%" }}>
                      <Typography
                        fontFamily={"Noto Sans Lao"}
                        fontSize={25}
                        fontWeight={"bold"}
                        color="rgba(1, 1, 1, 0.33)"
                      >
                        ເບີໂທ
                      </Typography>
                    </Box>
                    <Box sx={{ width: "60%" }}>
                      <Typography fontFamily={"Noto Sans Lao"} fontSize={25}>
                        {customerInfo.contact_info}
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    width={"95%"}
                  >
                    <Box sx={{ width: "40%" }}>
                      <Typography
                        fontFamily={"Noto Sans Lao"}
                        fontSize={25}
                        fontWeight={"bold"}
                        color="rgba(1, 1, 1, 0.33)"
                      >
                        ແຕ້ມສະສົມ
                      </Typography>
                    </Box>
                    <Box sx={{ width: "60%" }}>
                      <Typography fontFamily={"Noto Sans Lao"} fontSize={25}>
                        {Number(customerInfo.total_score || 0).toLocaleString()}{" "}
                        ແຕ້ມ
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    width={"95%"}
                  >
                    <Box sx={{ width: "40%" }}>
                      <Typography
                        fontFamily={"Noto Sans Lao"}
                        fontSize={25}
                        fontWeight={"bold"}
                        color="rgba(1, 1, 1, 0.33)"
                      >
                        ມູນຄ່າໃຊ້ຈ່າຍ
                      </Typography>
                    </Box>
                    <Box sx={{ width: "60%" }}>
                      <Typography fontFamily={"Noto Sans Lao"} fontSize={25}>
                        {Number(
                          customerInfo.total_bill_kip || 0
                        ).toLocaleString()}{" "}
                        ກີບ
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    width={"95%"}
                  >
                    <Box sx={{ width: "40%" }}>
                      <Typography
                        fontFamily={"Noto Sans Lao"}
                        fontSize={25}
                        fontWeight={"bold"}
                        color="rgba(1, 1, 1, 0.33)"
                      >
                        ວັນທີ່ເຂົ້າຮ່ວມ
                      </Typography>
                    </Box>
                    <Box sx={{ width: "60%" }}>
                      <Typography fontFamily={"Noto Sans Lao"} fontSize={25}>
                        {customerInfo?.start_work_time
                          ? new Date(
                              customerInfo.start_work_time * 1000
                            ).toLocaleString("en-GB", {
                              day: "2-digit",
                              month: "2-digit",
                              year: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                              hour12: false, // set to true if you want 12-hour format
                            })
                          : "UNKNOW"}
                      </Typography>
                    </Box>
                  </Box>

                  <CardActions>
                    <Button
                      variant="contained"
                      color="success"
                      sx={{ fontFamily: "Noto Sans Lao", fontSize: 25, gap:1 }}
                      onClick={createWithUser}
                    >
                      <AddCircleOutlineIcon/>
                      ສ້າງບິນໃຫ່ມ
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </Box>
      </Box>
      <ToastContainer position="top-center" />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ fontFamily: "Noto Sans Lao", fontSize: 30 }}>
          ສະໝັກສະມາຊິກໃຫ້ລູກຄ້າໃຫ່ມ
        </DialogTitle>
        <DialogContent>
          <Formik
            initialValues={{ username: "", phonenumber: "" }}
            validationSchema={SignupSchema}
            onSubmit={(values, { resetForm }) =>
              handleRegister(values, resetForm)
            }
          >
            {() => (
              <Form style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    display: "flex",
                    gap: 50,
                    marginBottom: 15,
                    alignContent: "center",
                  }}
                >
                  <label style={{ fontFamily: "Noto Sans Lao", fontSize: 45 }}>
                    ຊື່:
                  </label>
                  <Field
                    name="username"
                    type="text"
                    placeholder="ຊື່ລູກຄ້າ........"
                    style={{
                      width: "300px",
                      height: "40px",
                      padding: "8px",
                      fontSize: "25px",
                      borderRadius: "8px",
                      marginLeft: 60,
                      fontFamily: "Noto Sans Lao",
                    }}
                  />
                  <ErrorMessage name="username">
                    {(msg) => (
                      <Typography
                        variant="body2"
                        color="error"
                        sx={{
                          fontSize: "14px",
                          mt: 1,
                          ml: 1,
                          fontFamily: "Noto Sans Lao",
                        }}
                      >
                        ⚠️ {msg}
                      </Typography>
                    )}
                  </ErrorMessage>
                </div>

                <div style={{ display: "flex", gap: 50 }}>
                  <label style={{ fontFamily: "Noto Sans Lao", fontSize: 45 }}>
                    ເບີໂທ:
                  </label>
                  <Field
                    name="phonenumber"
                    type="text"
                    placeholder="ເບີໂທລູກຄ້າ........"
                    style={{
                      width: "300px",
                      height: "40px",
                      padding: "8px",
                      fontSize: "25px",
                      borderRadius: "8px",
                      fontFamily: "Noto Sans Lao",
                    }}
                  />
                  <ErrorMessage name="phonenumber">
                    {(msg) => (
                      <Typography
                        variant="body2"
                        color="error"
                        sx={{
                          fontSize: "14px",
                          mt: 1,
                          ml: 1,
                          fontFamily: "Noto Sans Lao",
                        }}
                      >
                        ⚠️ {"ຕ້ອງເປັນໂຕເລກເທົ່ານັ້ນ"}
                      </Typography>
                    )}
                  </ErrorMessage>
                </div>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 5,
                  }}
                >
                  <Button
                    sx={{ fontFamily: "Noto Sans Lao", fontSize: 20 }}
                    variant="contained"
                    color="success"
                    type="submit"
                  >
                    ສະໝັກ
                  </Button>
                  <Button
                    sx={{ fontFamily: "Noto Sans Lao", fontSize: 20, p: 2 }}
                    variant="contained"
                    color="error"
                    onClick={handleClose}
                  >
                    ຍົກເລີກ
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </Box>
  );
};

export default Customer;
