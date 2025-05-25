import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Avatar, Box, Grid2, Typography } from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import useTreekoffStorage from "../../../zustand/storageTreekoff";
import CheckIcon from "@mui/icons-material/Check";
import { billUserChannel, numberPayment, orderChannel, paymentMethod } from "../../../broadcast-channel/broadcast";

const CustomerDisplay = () => {
  const [userinfo2, setUserinfo2] = useState([])
  const [userBill2, setUserBill2] = useState([])
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [paymentDetail, setPaymentDetail] = useState(0);

  orderChannel.onmessage = (event) => {
    setUserinfo2(event);
  };

  billUserChannel.onmessage = (event) => {
    setUserBill2(event);
  }
  paymentMethod.onmessage = (event) => {
    setPaymentStatus(event)
  }

  numberPayment.onmessage = (event) => {
    setPaymentDetail(event)
  }

  const [employeeInfo, setEmployeeInfo] = useState(null);
  const [selected, setSelected] = useState([]) || [];
  const userInfoZustand = useTreekoffStorage((s) => s.userInfo)
  const userBillZustand = useTreekoffStorage((s) => s.userBill)

  console.log(`userbillzustand`, userBill2)

  const totalSum =
    userBill2 ? userBill2.reduce((acc, row) => acc + row.price * row.qty, 0) : userBillZustand.reduce((acc, row) => acc + row.price * row.qty, 0) || 0;

  const handleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };
  const renderWelcome = () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#e4e4e4",
        width: "100%",
        height: "100%",
      }}
    >
      <img
        src="/assests/TK.png"
        style={{
          height: 236,
          width: 350,
          marginTop: -200,
        }}
      />
      <Typography variant="h1" fontWeight="bold">
        Welcome to Treekoff
      </Typography>
      <Typography
        sx={{
          fontFamily: "Noto Sans Lao",
          fontSize: 35,
          color: "rgba(0, 0, 0, 0.59)",
        }}
      >
        ຍິນດີຕ້ອນຮັບເຂົ້າສູ່ຮ້ານທຣີຄອຟ
      </Typography>
      <h2
        style={{
          alignSelf: "end",
          marginRight: 20,
          fontFamily: "Noto Sans Lao",
        }}
      >
        {employeeInfo?.username}
      </h2>
      <div style={{ display: "flex", justifyContent: "end", width: "100%" }}>
        <span style={{ fontSize: 30 }}>🏢</span>
        <h3
          style={{
            marginLeft: 8,
            marginRight: 20,
            fontFamily: "Noto Sans Lao",
          }}
        >
          {employeeInfo?.brach}
        </h3>
      </div>
    </div>
  );

  const renderUserInfoOnly = () => (
    <Box>
      <Box display="flex" justifyContent="space-between" margin={5}>
        <Typography fontSize={25} fontFamily="Noto Sans Lao">
          ຜົນການຄົ້ນຫາ
        </Typography>
        <img src="assests/TK.png" style={{ width: 160 }} />
      </Box>

      <Grid2
        container
        marginTop={-12}
        spacing={1.5}
        fontFamily="Noto Sans Lao"
        display="flex"
        flexDirection="column"
        padding={10}
        justifyContent="center"
        alignContent="center"
      >
        {/* Row: Image */}
        <Grid2 container alignItems="center" gap={30}>
          <Grid2>
            <Typography color="gray" fontFamily={"Noto Sans Lao"} fontSize={30}>
              ຮູບ:
            </Typography>
          </Grid2>
          <Grid2>
            <Avatar
              src={userinfo2?.image || userInfoZustand?.image || ""}
              alt={userinfo2?.username || userInfoZustand?.username || ""}
              style={{ width: 120, height: 120 }}
            />
          </Grid2>
        </Grid2>

        {/* Row: ID */}
        <Grid2 container alignItems="center" gap={33}>
          <Grid2>
            <Typography color="gray" fontSize={30} fontFamily={"Noto Sans Lao"}>
              ID:
            </Typography>
          </Grid2>
          <Grid2>
            <Typography
              fontWeight="bold"
              fontSize={30}
              fontFamily={"Noto Sans Lao"}
            >
              {userinfo2?.id || userInfoZustand?.id || ""}
            </Typography>
          </Grid2>
        </Grid2>
        {/* Row: Name */}
        <Grid2 container alignItems="center" gap={35}>
          <Grid2>
            <Typography color="gray" fontFamily={"Noto Sans Lao"} fontSize={30}>
              ຊື່:
            </Typography>
          </Grid2>
          <Grid2>
            <Typography fontFamily={"Noto Sans Lao"} fontSize={30}>
              {userinfo2?.username || userInfoZustand?.username || ""}
            </Typography>
          </Grid2>
        </Grid2>

        {/* Row: Phone */}
        <Grid2 container alignItems="center" gap={30}>
          <Grid2>
            <Typography color="gray" fontFamily={"Noto Sans Lao"} fontSize={30}>
              ເບີໂທ:
            </Typography>
          </Grid2>
          <Grid2>
            <Typography fontSize={30} fontFamily={"Noto Sans Lao"}>
              {userinfo2?.phonenumber || userInfoZustand?.phonenumber || ""}
            </Typography>
          </Grid2>
        </Grid2>

        {/* Row: Points */}
        <Grid2 container alignItems="center" gap={22}>
          <Grid2>
            <Typography color="gray" fontFamily={"Noto Sans Lao"} fontSize={30}>
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
              {userinfo2?.point?.point || userInfoZustand?.point?.point || 0} ແຕ້ມ
            </Typography>
          </Grid2>
        </Grid2>

        {/* Row: Total Sales */}
        <Grid2 container alignItems="center" gap={23}>
          <Grid2>
            <Typography color="gray" fontFamily={"Noto Sans Lao"} fontSize={30}>
              ມູນຄ່າຂາຍ:
            </Typography>
          </Grid2>
          <Grid2>
            <Typography fontSize={30} fontFamily={"Noto Sans Lao"}>
              {"0"} KIP
            </Typography>
          </Grid2>
        </Grid2>

        {/* Row: Join Time */}
        <Grid2 container alignItems="center" gap={23}>
          <Grid2>
            <Typography color="gray" fontFamily={"Noto Sans Lao"} fontSize={30}>
              ເວລາຮ່ວມ:
            </Typography>
          </Grid2>
          <Grid2>
            <Typography fontSize={30} fontFamily={"Noto Sans Lao"}>
              {new Date(userinfo2?.bill?.createAt).toLocaleString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              }) || new Date(userInfoZustand?.bill?.createAt).toLocaleString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              }) || 0}
            </Typography>
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  );

  const renderUserWithBill = () => (
    <Box sx={{ padding: 8 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Box display="flex" alignContent="center">
            <Avatar
              src={userinfo2?.image || userInfoZustand?.image || ""}
              alt={userinfo2?.username || userInfoZustand?.image || ""}
              style={{ width: 120, height: 120 }}
            />
            <Typography
              fontFamily="Noto Sans Lao"
              fontSize={15}
              sx={{ alignSelf: "center", marginLeft: 2 }}
            >
              {userinfo2?.username || ""}
            </Typography>
          </Box>
          <Typography variant="h5">CUSTOMER ID: 9</Typography>
          <Typography variant="h5">
            BILL NO: #{userinfo2?.bill?.id || userInfoZustand?.bill?.id || ""} | TIME{" "}
            {new Date(userinfo2?.bill?.createAt || userInfoZustand?.bill?.createAt || "").toLocaleString("en-GB", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            }) || 0}
          </Typography>
        </Box>

        {(userBill2?.length || userBillZustand?.length) > 0 ? (
          <Box>
            <Card sx={{ width: 200, justifySelf: "end", marginBottom: "10" }}>
              <CardMedia
                sx={{
                  cursor: "pointer",
                }}
                component="img"
                height="180"
                image={
                  userBill2?.[0]?.img ||
                  userBillZustand?.[0]?.img ||
                  ""
                }
                alt="menu"
              />
            </Card>
            <Typography variant="h4">
              {(userBill2?.[0]?.menu || userBillZustand?.[0]?.menu || "")} [
              {userBill2?.[0]?.size || userBillZustand?.[0]?.size || ""}]
            </Typography>
            <Typography sx={{ fontSize: "25", justifySelf: "end" }}>
              {(userBill2?.[0]?.price || userBillZustand?.[0]?.price || 0).toLocaleString()} KIP X{" "}
              {userBill2?.[0]?.qty || userBillZustand?.[0]?.qty || 0} UNIT
            </Typography>
            <Typography sx={{ fontSize: "30", fontWeight: "bold", justifySelf: "end" }}>
              {(
                (userBill2?.[0]?.price || userBillZustand?.[0]?.price || 0) *
                (userBill2?.[0]?.qty || userBillZustand?.[0]?.qty || 0)
              ).toLocaleString()}{" "}
              KIP
            </Typography>
          </Box>
        ) : null}

      </Box>
      <Box>
        <Paper sx={{ marginTop: 4, height: 200, overflow: "auto" }}>
          <Table>
            <TableHead sx={{ backgroundColor: "rgba(0, 0, 0, 0.29)" }}>
              <TableRow>
                <TableCell>ORDERS</TableCell>
                <TableCell>MENU</TableCell>
                <TableCell>Price (KIP)/UNIT</TableCell>
                <TableCell>QTY</TableCell>
                <TableCell>TOTAL</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userBill2 && userBill2.length > 0 ? (
                userBill2?.map((row, index) => {
                  const isSelected = selected.includes(`${row.id}-${row.size}-${row.sweet}`);
                  return (
                    <TableRow
                      key={`${row.id}-${row.size}-${row.sweet}`}
                      onClick={() => handleSelect(`${row.id}-${row.size}-${row.sweet}`)}
                      sx={{
                        cursor: "pointer",
                        backgroundColor: isSelected ? "#e3f2fd" : "transparent", // 🔷 highlight
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
                          src={row.img}
                          alt={row.menu}
                          style={{
                            width: 40,
                            height: 40,
                            objectFit: "cover",
                            borderRadius: 4,
                            marginRight: 10,
                          }}
                        />
                        {row.menu}
                      </TableCell>
                      <TableCell>{row.price.toLocaleString() || 0}</TableCell>
                      <TableCell>{row.qty}</TableCell>
                      <TableCell>
                        {(row.price * row.qty).toLocaleString() || 0}
                      </TableCell>
                    </TableRow>
                  );
                })
              ) : (
                userBillZustand.map((row, index) => {
                  const isSelected = selected.includes(row.id);
                  return (
                    <TableRow
                      key={`${row.id}${index}`}
                      onClick={() => handleSelect(row.id)}
                      sx={{
                        cursor: "pointer",
                        backgroundColor: isSelected ? "#e3f2fd" : "transparent", // 🔷 highlight
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
                          src={row.img}
                          alt={row.menu}
                          style={{
                            width: 40,
                            height: 40,
                            objectFit: "cover",
                            borderRadius: 4,
                            marginRight: 10,
                          }}
                        />
                        {row.menu}
                      </TableCell>
                      <TableCell>{row.price.toLocaleString() || 0}</TableCell>
                      <TableCell>{row.qty}</TableCell>
                      <TableCell>
                        {(row.price * row.qty).toLocaleString() || 0}
                      </TableCell>
                    </TableRow>
                  );
                })
              )

              }
            </TableBody>
          </Table>
        </Paper>
      </Box>
      <Box display="flex" justifyContent="end" gap={3}>
        <Typography variant="h3" fontWeight="bold" alignSelf="center">
          TOTAL
        </Typography>
        <Typography
          variant="h2"
          sx={{ alignSelf: "center", color: "red", fontWeight: "bold" }}
        >
          {totalSum.toLocaleString() || 0} KIP
        </Typography>
      </Box>
    </Box>
  );

  const renderPayment = () => (
    <Box sx={{ width: "95%", height: "95%", justifySelf: "center" }}>
      {/** STATUS SECTIION */}
      <Box display="flex" justifyContent={"center"}>
        <CheckIcon
          sx={{ fontSize: 30, alignSelf: "center", color: "rgb(59, 146, 37)" }}
        />
        <Typography fontWeight="bold" fontSize={20} color="rgb(59, 146, 37)">
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
                    src={userinfo2?.image}
                    alt="Pao"
                    style={{ width: 80, height: 80 }}
                  />
                </Box>
                <Typography fontFamily="Noto Sans Lao" fontSize={18}>
                  CUSTOMER NAME: {userinfo2?.username || "UNKNOW"}
                </Typography>
                <Typography fontSize={18}>
                  CUSTOMER ID: {userinfo2?.id || 0}
                </Typography>
                <Typography fontSize={18}>
                  BILL NO : #{userinfo2?.bill?.id || userInfoZustand?.bill?.id || 0} | TIME{" "}
                  {new Date(userinfo2?.bill?.createAt).toLocaleString("en-GB", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  }) || 0}
                </Typography>
                <Typography
                  fontFamily="Noto Sans Lao"
                  fontSize={20}
                  color="rgb(26, 167, 8)"
                  fontWeight="bold"
                >
                  ແຕ້ມສະສົມ: {userinfo2?.point?.point || "01"} ຄະແນນ
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
                      <TableCell>Price (KIP)/UNIT</TableCell>
                      <TableCell>QTY</TableCell>
                      <TableCell>TOTAL</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {userBill2 ? (
                      userBill2?.map((row, index) => {
                        const isSelected = selected.includes(row.id);
                        return (
                          <TableRow
                            key={`${row.id}-${index}`}
                            onClick={() => handleSelect(row.id)}
                            sx={{
                              cursor: "pointer",
                              backgroundColor: isSelected
                                ? "#e3f2fd"
                                : "transparent", // 🔷 highlight
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
                                src={row.img}
                                alt={row.menu}
                                style={{
                                  width: 40,
                                  height: 40,
                                  objectFit: "cover",
                                  borderRadius: 4,
                                  marginRight: 10,
                                }}
                              />
                              {row.menu}
                            </TableCell>
                            <TableCell>
                              {row.price.toLocaleString() || 0}
                            </TableCell>
                            <TableCell>{row.qty}</TableCell>
                            <TableCell>
                              {(row.price * row.qty).toLocaleString() || 0}
                            </TableCell>
                          </TableRow>
                        );
                      })
                    ) : userBillZustand ? userBillZustand.map((row, index) => {
                      const isSelected = selected.includes(row.id);
                      return (
                        <TableRow
                          key={`${row.id}-${index}`}
                          onClick={() => handleSelect(row.id)}
                          sx={{
                            cursor: "pointer",
                            backgroundColor: isSelected
                              ? "#e3f2fd"
                              : "transparent", // 🔷 highlight
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
                              src={row.img}
                              alt={row.menu}
                              style={{
                                width: 40,
                                height: 40,
                                objectFit: "cover",
                                borderRadius: 4,
                                marginRight: 10,
                              }}
                            />
                            {row.menu}
                          </TableCell>
                          <TableCell>
                            {row.price.toLocaleString() || 0}
                          </TableCell>
                          <TableCell>{row.qty}</TableCell>
                          <TableCell>
                            {(row.price * row.qty).toLocaleString() || 0}
                          </TableCell>
                        </TableRow>)
                    }) : (
                      <TableRow>
                        <TableCell></TableCell>
                        <TableCell
                          style={{
                            display: "flex",
                            alignItems: "center",
                            fontWeight: "bold",
                          }}
                        ></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                    )}
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
          <Box marginTop={32}>
            <Box display="flex" justifyContent="center" gap={5}>
              <Typography sx={{ fontSize: 30 }}>CASH</Typography>
              <Typography sx={{ fontSize: 30 }}>
                {(Number(paymentDetail) || 0).toLocaleString()}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="center" gap={5}>
              <Typography sx={{ fontSize: 32, color: "red" }}>TOTAL</Typography>
              <Typography sx={{ fontSize: 32, color: "red" }}>
                {totalSum?.toLocaleString() || 0}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="center" gap={5}>
              <Typography sx={{ fontSize: 35, color: "rgb(59, 146, 37)" }}>
                CHANGE
              </Typography>
              <Typography sx={{ fontSize: 35, color: "rgb(59, 146, 37)" }}>
                {paymentDetail > 0
                  ? Math.max(paymentDetail - totalSum, 0).toLocaleString() + " KIP"
                  : "0 KIP"}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
  let content = null;
  const currentUser =
    userinfo2 && Object.keys(userinfo2).length > 0 ? userinfo2 :
      userInfoZustand && Object.keys(userInfoZustand).length > 0 ? userInfoZustand :
        null;

  if (paymentStatus === "done") {
    content = renderPayment(); // 👈 FIRST, show payment page if done
  } else if (!currentUser) {
    content = renderWelcome();
  } else if (currentUser.bill === null) {
    content = renderUserInfoOnly();
  } else if (currentUser.bill) {
    content = renderUserWithBill();
  }


  console.log(currentUser?.bill)

  return <div style={{ width: "100vw", height: "100vh" }}>{content}</div>;
};


export default CustomerDisplay;
