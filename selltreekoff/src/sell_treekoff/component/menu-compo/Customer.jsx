import { Avatar, Box, Button, Grid2, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import useTreekoffStorage from "../../../zustand/storageTreekoff";
import { useEffect, useState } from "react";
import { CustomerInfos } from "../../data/MockData";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { createBill, getUser, registerUser } from "../../../api/sellTreekoff";
import { toast, ToastContainer } from "react-toastify";

const SignupSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  phonenumber: Yup.number().required("Required"),
});

const Customer = () => {
  const [searchCustomer, setSearchCustomer] = useState("");
  const userInfo = useTreekoffStorage((s) => s.userInfo);
  const setUserInfo = useTreekoffStorage((s) => s.setUserInfo);
  const resetBill = useTreekoffStorage((s) => s.resetBill);

  useEffect(() => {
    if (userInfo?.id === 9001) {
      resetBill();
      return;
    }
  }, [userInfo]);

  const navigate = useNavigate();

  const createWithUser = async (userId) => {
    try {
      if (userInfo?.bill === null) {
        const res = await createBill(userId);
        const billData = res?.data;
        setUserInfo({
          ...userInfo,
          bill: billData,
        });
      }
    } catch (err) {
      console.log(err);
    }

    navigate("/productdetail");
  };

  const handleRegister = async (values, resetForm) => {
    console.log("Submitting form with values:", values); // Add this line
    try {
      const ress = await registerUser(values);
      toast.success(ress.data);
    } catch (err) {
      console.log(err);
    }

    resetForm();
  };

  const handleSearch = async (value) => {
    if (!value || value === "") {
      return;
    }
    try {
      const userr = await getUser(value);
      if (userr?.data?.message) {
        resetBill();
        setSearchCustomer("");
        toast.error("ຂໍ້ມູນລູກຄ້າຄົນນີ້ ບໍ່ມີໃນລະບົບ", {
          style: { fontFamily: "'Noto Sans Lao', sans-serif" },
        });
        ;
      } else {
        setUserInfo(userr?.data);
        setSearchCustomer("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box display="flex" flexDirection="column" gap="40px">
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
            value={searchCustomer}
            onChange={(e) => setSearchCustomer(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault(); // 🛑 Prevent form from refreshing
                handleSearch(searchCustomer); // 🔍 Call your function
              }
            }}
            placeholder="ລະບຸຂໍ້ມູນລູກຄ້າ..."
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
            sx={{ height: 50, bgcolor: "#00a65a" }}
            onClick={() => createWithUser(userInfo?.id)}
          >
            <Typography fontFamily={"Noto Sans Lao"} fontWeight="bold">
              ສ້າງບິນໃຫ່ມ
            </Typography>
          </Button>
          <Button variant="contained" sx={{ height: 50, bgcolor: "#3c8dbc" }}>
            <Typography fontFamily={"Noto Sans Lao"} fontWeight="bold">
              ສ້າງບິນໃຫ່ມບໍ່ມີໄອດີ
            </Typography>
          </Button>
        </Box>

        {/** Output Area */}
        {userInfo ? (
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
                      src={userInfo?.image || ""}
                      alt={userInfo?.username || "EMTY"}
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
                      {userInfo?.id || "0"}
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
                      {userInfo?.username || "EMTY"}
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
                      {userInfo?.phonenumber || "EMTY"}
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
                      {userInfo?.point[0]?.point?.toLocaleString() ||
                        "12 " + "ແຕ້ມ" ||
                        `0 ແຕ້ມ`}
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
                      {userInfo?.totalSpent?.toLocaleString() ||
                        "0 " + "ກີບ" ||
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
                      {userInfo?.createAt
                        ? new Date(userInfo?.createAt).toLocaleString("en-GB", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })
                        : "UNKNOW"}
                    </Typography>
                  </Grid2>
                </Grid2>
              </Grid2>
            </Box>

            {/** Table History Bill user */}
            <Box p={2}>
              <Typography fontFamily={"Noto Sans Lao"}>
                ບິນລາຍການທີ່ຍັງບໍ່ສຳເລັດລ່າສຸດ:
              </Typography>
              <TableContainer component={Paper} sx={{}}>
                <Table>
                  <TableHead sx={{ backgroundColor: "white" }}>
                    <TableRow>
                      <TableCell sx={{ color: "black" }}>
                        <strong>Date</strong>
                      </TableCell>
                      <TableCell sx={{ color: "black" }}>
                        <strong>BILL ID</strong>
                      </TableCell>
                      <TableCell sx={{ color: "black" }}>
                        <strong>TOTAL MENU</strong>
                      </TableCell>
                      <TableCell sx={{ color: "black" }}>
                        <strong>TOTAL PRICE</strong>
                      </TableCell>
                      <TableCell sx={{ color: "black" }}>
                        <strong>STATUS</strong>
                      </TableCell>
                      <TableCell sx={{ color: "black" }}>
                        <strong>UPDATE</strong>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {userInfo?.bill !== "" ? (
                      <TableRow sx={{ backgroundColor: "white" }}>
                        <TableCell sx={{ color: "black" }}>
                          <Typography fontFamily={"Noto Sans Lao"} alignSelf="center">
                            {userInfo?.bill?.createAt ? userInfo.bill.createAt.split("T")[0] : ""}
                          </Typography>
                        </TableCell>
                        <TableCell sx={{ color: "black" }}>
                          <Typography fontFamily={"Noto Sans Lao"}  justifySelf="center">
                            {userInfo?.bill?.id || ""}
                          </Typography>
                        </TableCell>
                        <TableCell sx={{ color: "black" }}>
                          <Typography fontFamily={"Noto Sans Lao"} justifySelf="center">
                            {userInfo?.bill?.totalMenu || "0"}
                          </Typography>
                        </TableCell>
                        <TableCell sx={{ color: "black" }}>
                          <Typography fontFamily={"Noto Sans Lao"} justifySelf="center">
                            {userInfo?.bill?.totalPrice || "0"}
                          </Typography>
                        </TableCell>
                        <TableCell sx={{ color: "black" }}>
                          <Typography fontFamily={"Noto Sans Lao"}>
                            {userInfo?.bill?.status === true ? "ຍັງບໍ່ທັນຊຳລະ" : "." || ""}
                          </Typography>
                        </TableCell>
                        <TableCell sx={{ color: "black" }}>
                          <Typography fontFamily={"Noto Sans Lao"}>
                            {userInfo?.bill?.update ? userInfo.bill.update.split("T")[0] : ". " || ""}
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ) : (
                      <TableRow sx={{ backgroundColor: "white" }}>
                        <TableCell sx={{ color: "black" }}>
                          <Typography fontFamily={"Noto Sans Lao"}></Typography>
                        </TableCell>
                        <TableCell sx={{ color: "black" }}>
                          <Typography fontFamily={"Noto Sans Lao"}></Typography>
                        </TableCell>
                        <TableCell sx={{ color: "black" }}>
                          <Typography fontFamily={"Noto Sans Lao"}></Typography>
                        </TableCell>
                        <TableCell sx={{ color: "black" }}>
                          <Typography fontFamily={"Noto Sans Lao"}></Typography>
                        </TableCell>
                        <TableCell sx={{ color: "black" }}>
                          <Typography fontFamily={"Noto Sans Lao"}></Typography>
                        </TableCell>
                        <TableCell sx={{ color: "black" }}>
                          <Typography fontFamily={"Noto Sans Lao"}></Typography>
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
        ) : (
          ""
        )}
      </Box>
      {/* Register for new Customer. */}

      <Box>
        <Box display="flex" alignContent="center">
          <AddIcon sx={{ fontSize: 35, color: "#3c8dbc" }} />
          <Typography
            fontFamily={"Noto Sans Lao"}
            fontSize={25}
            sx={{ alignItems: "center", color: "#3c8dbc" }}
          >
            ສະໝັກສະມາຊິກໃໝ່:
          </Typography>
        </Box>
        <Box
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Typography fontFamily={"Noto Sans Lao"}>
            ກະລຸນາໃສ່ຂໍ້ມູນບັນຊີຂອງທ່ານ:
          </Typography>

          <Formik
            initialValues={{ username: "", phonenumber: "" }}
            validationSchema={SignupSchema}
            onSubmit={(values, { resetForm }) =>
              handleRegister(values, resetForm)
            }
          >
            {() => (
              <Form>
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

                <Button
                  type="submit"
                  variant="contained"
                  sx={{ fontFamily: "Noto Sans Lao", fontSize: 30 }}
                >
                  ສົ່ງຟອມ
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
      <ToastContainer position="top-center" />
    </Box>
  );
};

export default Customer;
