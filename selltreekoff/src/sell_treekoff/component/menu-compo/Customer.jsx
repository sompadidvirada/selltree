import { Avatar, Box, Button, Grid2, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import useTreekoffStorage from "../../../zustand/storageTreekoff";
import { useEffect, useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { createBill, registerUser } from "../../../api/sellTreekoff";
import { toast, ToastContainer } from "react-toastify";
import { billUserChannel, orderChannel, paymentMethod } from "../../../broadcast-channel/broadcast";
import { searchCus } from "../../../api/treekoff"
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const SignupSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  phonenumber: Yup.string().required("Required"),
});

const Customer = () => {

  const [searchCustomer, setSearchCustomer] = useState("");
  const userInfo = useTreekoffStorage((s) => s.userInfo);
  const setUserInfo = useTreekoffStorage((s) => s.setUserInfo);
  const resetBill = useTreekoffStorage((s) => s.resetBill);
  const userBill = useTreekoffStorage((s) => s.userBill)
  const navigate = useNavigate();
  const hasHandled9001 = useRef(false);
  const customerInfo = useTreekoffStorage((state) => state.customerInfo)
  const setCustomerInfo = useTreekoffStorage((state) => state.setCustomerInfo)
  const resetCustomer = useTreekoffStorage((state) => state.resetCustomerInfo)
  const [alertError, setAlertError] = useState(false)



  useEffect(() => {
    if (userInfo?.id === 9001 && !hasHandled9001.current) {
      resetBill();
      hasHandled9001.current = true;
    }
  }, [userInfo]);


  const handleRegister = async (values, resetForm) => {
    console.log(values)
    resetForm();
    handleClose()
  };


  const createWithUser = async (userId) => {
    try {
      const res = await createBill(userId);
      const billData = res?.data;

      const combineCreate = {
        ...userInfo,
        bill: billData,
      };

      {
        /** set local state */
      }

      setUserInfo(combineCreate);

      {
        /**send broadcast channel */
      }
      orderChannel.postMessage(combineCreate)
    } catch (err) {
      console.log(err);
    }

    navigate("/productdetail");
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

    {/** set local storage */ }

    setUserInfo(combinedUser);

    {/** send broadcast channel */ }

    orderChannel.postMessage(combinedUser)


    setTimeout(() => {
      navigate("/productdetail");
    }, 200);
  };

  const handleSearch = async (value) => {
    setAlertError(false)
    console.log(value)
    if (!value || value === "") {
      return;
    }
    try {
      const customerSeacrh = await searchCus(value)
      console.log(customerSeacrh)

      if (customerSeacrh?.data === "" || customerSeacrh?.data?.status === "error") {
        resetCustomer("")
        setSearchCustomer("")
        orderChannel.postMessage(null)
        setAlertError(true)
        return
      }


      const responeData = customerSeacrh.data.data

      const meachData = {
        ...responeData[0],
        ...responeData[1]
      }
      setCustomerInfo(meachData)


      orderChannel.postMessage(meachData)

      setSearchCustomer("");
    } catch (err) {
      console.log(err);
    }
  };


  useEffect(() => {
    if (userInfo) {
      orderChannel.postMessage(userInfo)
    } if (userBill?.length === 0) {
      billUserChannel.postMessage(null)
    }
  }, [userBill, userInfo]);

  useEffect(() => {
    paymentMethod.postMessage(null)
  }, [])

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box display="flex" flexDirection="column" gap="40px" minHeight={610} justifyContent={'space-between'}>
      {/* Seacrh Customer Section. */}

      <Box>
        {/* Search Area */}
        <Box display="flex" alignContent="center">
          <SearchIcon sx={{ fontSize: 35 }} />
          <Typography
            fontFamily={"Noto Sans Lao"}
            fontSize={25}
            sx={{ alignItems: "center" }}
          >
            ຄົ້ນຫາບັນຊີລູກຄ້າ
          </Typography>
        </Box>
        <Box display="flex" gap="10px">
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
                handleSearch(searchCustomer); // 🔍 Call your function
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
            disabled={userInfo?.id === 9001 || !userInfo ? true : false}
            sx={{ height: 50, bgcolor: "#00a65a" }}
            onClick={() => createWithUser(userInfo?.id)}
          >
            <Typography fontFamily={"Noto Sans Lao"} fontWeight="bold">
              ສ້າງບິນໃຫ່ມ
            </Typography>
          </Button>
          <Button
            variant="contained"
            sx={{ height: 50, bgcolor: "#3c8dbc" }}
            onClick={handleCreateNoUser}
          >
            <Typography fontFamily={"Noto Sans Lao"} fontWeight="bold">
              ສ້າງບິນໃຫ່ມບໍ່ມີໄອດີ
            </Typography>
          </Button>
        </Box>
        {/** Alert MESSAGE */}
        {alertError ? (
          <Stack sx={{ width: '100%', mt: 3 }} spacing={50}>
            <Alert severity="error" sx={{ fontFamily: 'Noto Sans Lao', height: '150px', fontSize: 50 }}>
              <AlertTitle sx={{ fontSize: 30, fontFamily: 'Noto Sans Lao' }}>ບໍ່ຖືກຕ້ອງ !</AlertTitle>
              ໄອດີ ຫຼີເບີໂທນີ້ ບໍ່ມີໃນລະບົບ
            </Alert>
          </Stack>
        ) : ""

        }

        {/** Output Area */}
        {customerInfo ? (
          <Box
            sx={{
              p: "20px",
            }}
          >
            <Typography fontFamily={"Noto Sans Lao"} fontSize={25}>
              ຜົນການຄົ້ນຫາ
            </Typography>

            {/** Table Detail User Area */}

            <Box>
              <Grid2
                container
                spacing={0.2}
                fontFamily="Noto Sans Lao"
                display="flex"
                flexDirection="column"
              >
                {/* Row: Image */}
                <Grid2 container alignItems="center" gap={30}>
                  <Grid2>
                    <Typography
                      color="gray"
                      fontFamily={"Noto Sans Lao"}
                      fontSize={30}
                    >
                      ຮູບ:
                    </Typography>
                  </Grid2>
                  <Grid2>
                    <Avatar
                      src={customerInfo?.profile_img || ""}
                      alt={customerInfo?.full_name || "EMTY"}
                      sx={{ width: 120, height: 120 }}
                    />
                  </Grid2>
                </Grid2>

                {/* Row: ID */}
                <Grid2 container alignItems="center" gap={33}>
                  <Grid2>
                    <Typography
                      color="gray"
                      fontSize={30}
                      fontFamily={"Noto Sans Lao"}
                    >
                      ID:
                    </Typography>
                  </Grid2>
                  <Grid2>
                    <Typography
                      fontWeight="bold"
                      fontSize={30}
                      fontFamily={"Noto Sans Lao"}
                    >
                      {customerInfo?.id_list || "0"}
                    </Typography>
                  </Grid2>
                </Grid2>
                {/* Row: Name */}
                <Grid2 container alignItems="center" gap={35}>
                  <Grid2>
                    <Typography
                      color="gray"
                      fontFamily={"Noto Sans Lao"}
                      fontSize={30}
                    >
                      ຊື່:
                    </Typography>
                  </Grid2>
                  <Grid2>
                    <Typography fontFamily={"Noto Sans Lao"} fontSize={30}>
                      {customerInfo?.full_name || "EMTY"}
                    </Typography>
                  </Grid2>
                </Grid2>

                {/* Row: Phone */}
                <Grid2 container alignItems="center" gap={30}>
                  <Grid2>
                    <Typography
                      color="gray"
                      fontFamily={"Noto Sans Lao"}
                      fontSize={30}
                    >
                      ເບີໂທ:
                    </Typography>
                  </Grid2>
                  <Grid2>
                    <Typography fontSize={30} fontFamily={"Noto Sans Lao"}>
                      {customerInfo?.contact_info || "EMTY"}
                    </Typography>
                  </Grid2>
                </Grid2>

                {/* Row: Points */}
                <Grid2 container alignItems="center" gap={22}>
                  <Grid2>
                    <Typography
                      color="gray"
                      fontFamily={"Noto Sans Lao"}
                      fontSize={30}
                    >
                      ແຕ້ມສະສົມ:
                    </Typography>
                  </Grid2>
                  <Grid2>
                    <Typography
                      color="green"
                      sx={{ textDecoration: "underline" }}
                      fontSize={30}
                      fontFamily={"Noto Sans Lao"}
                    >
                      {customerInfo?.total_score
                        ? Number(customerInfo.total_score).toLocaleString() + " ແຕ້ມ"
                        : "0 ແຕ້ມ"}
                    </Typography>
                  </Grid2>
                </Grid2>

                {/* Row: Total Sales */}
                <Grid2 container alignItems="center" gap={23}>
                  <Grid2>
                    <Typography
                      color="gray"
                      fontFamily={"Noto Sans Lao"}
                      fontSize={30}
                    >
                      ມູນຄ່າຂາຍ:
                    </Typography>
                  </Grid2>
                  <Grid2>
                    <Typography fontSize={30} fontFamily={"Noto Sans Lao"}>
                      {Number(customerInfo?.total_bill_kip).toLocaleString() + ` ກີບ` ||
                        `0 ກີບ`}
                    </Typography>
                  </Grid2>
                </Grid2>

                {/* Row: Join Time */}
                <Grid2 container alignItems="center" gap={23}>
                  <Grid2>
                    <Typography
                      color="gray"
                      fontFamily={"Noto Sans Lao"}
                      fontSize={30}
                    >
                      ເວລາຮ່ວມ:
                    </Typography>
                  </Grid2>
                  <Grid2>
                    <Typography fontSize={30} fontFamily={"Noto Sans Lao"}>
                      {customerInfo?.start_work_time
                        ? new Date(customerInfo.start_work_time * 1000).toLocaleString("en-GB", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                          hour12: false, // set to true if you want 12-hour format
                        })
                        : "UNKNOW"}
                    </Typography>
                  </Grid2>
                </Grid2>
              </Grid2>
            </Box>
          </Box>
        ) : (
          ""
        )}
      </Box>

      {/* Register for new Customer. */}

      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Button variant="contained" sx={{ fontFamily: 'Noto Sans Lao', p: 2, fontSize: 25 }} onClick={handleClickOpen}>ສະໝັກສະມາຊິກ</Button>
      </Box>
      <ToastContainer position="top-center" />
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle sx={{ fontFamily: 'Noto Sans Lao', fontSize: 30 }}>ສະໝັກສະມາຊິກໃຫ້ລູກຄ້າໃຫ່ມ</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={{ username: "", phonenumber: "" }}
            validationSchema={SignupSchema}
            onSubmit={(values, { resetForm }) =>
              handleRegister(values, resetForm)
            }
          >
            {() => (
              <Form style={{ display: 'flex', flexDirection: 'column' }}>
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
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 5 }}>
                  <Button sx={{ fontFamily: 'Noto Sans Lao', fontSize: 20, p: 2 }} variant="contained" color="error" onClick={handleClose}>ຍົກເລີກ</Button>
                  <Button sx={{ fontFamily: 'Noto Sans Lao', fontSize: 20 }} variant="contained" color="success" type="submit">ສະໝັກ</Button>
                </Box>
              </Form>

            )}
          </Formik>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Customer;
