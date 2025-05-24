import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Avatar, Box, Grid2, Typography } from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Checkbox,
  Paper,
} from "@mui/material";
import useTreekoffStorage from "../../../zustand/storageTreekoff";
import { io } from "socket.io-client";

const socket = io('http://localhost:3001');

const CustomerDisplay = () => {

  const [employeeInfo,setEmployeeInfo] = useState(null)
  const [userInfo,setUserInfo] = useState(null)
  const [userBill, setUserBill] = useState([])
  const [selected, setSelected] = useState([]);
  const totalSum = userBill?.reduce((acc, row) => acc + row.price * row.qty, 0);

  useEffect(() => {
    socket.on('receive-from-main', (data) => {
      setUserInfo(data.data); // or access specific fields like data.data.name
    });
  
    return () => socket.off('receive-from-main');
  }, []);

  const handleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  console.log(userInfo)
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        alignSelf: "center",
        justifySelf: "center",
      }}
    >
      {" "}
      { userInfo && userBill.length === 0 ? (
        <Box>
          <Box
            display="flex"
            justifyContent="space-between"
            fontFamily="Noto Sans Lao"
            margin={5}
          >
            <Typography variant="" fontSize={25}>
              ຜົນການຄົ້ນຫາ
            </Typography>
            <img
              src="assests/TK.png"
              style={{
                width: 160,
              }}
            />
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
                  src={userInfo?.image}
                  alt={userInfo?.username}
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
                <Typography fontWeight="bold" fontSize={30} fontFamily={"Noto Sans Lao"}>
                  {userInfo?.id}
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
                  {userInfo?.username}
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
                  {userInfo?.phonenumber}
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
                  {userInfo?.point?.point} ແຕ້ມ
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
                  {new Date(userInfo?.bill?.createAt).toLocaleString("en-GB", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                </Typography>
              </Grid2>
            </Grid2>
          </Grid2>
        </Box>
      ) : userBill.length > 0 ? (
        <Box
          sx={{
            padding: 8,
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
                  src={userInfo?.image}
                  alt={userInfo?.username}
                  style={{ width: 120, height: 120 }}
                />
                <Typography
                  fontFamily="Noto Sans Lao"
                  fontSize={15}
                  sx={{ alignSelf: "center", marginLeft: 2 }}
                >
                  {userInfo?.username}
                </Typography>
              </Box>
              <Typography variant="h5">CUSTOMER ID: 9</Typography>
              <Typography variant="h5">
                BILL NO: #{userInfo?.bill?.id} | TIME {new Date(userInfo?.bill?.createAt).toLocaleString("en-GB", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
              </Typography>
            </Box>
            <Box>
              <Card sx={{ width: 200, justifySelf: "end", marginBottom: "10" }}>
                <CardMedia
                  sx={{
                    cursor: "pointer",
                  }}
                  component="img"
                  height="180"
                  image={userBill[0]?.image}
                  alt={"hot americano"}
                />
              </Card>
              <Typography variant="h4">{userBill[0]?.menu} [{userBill[0]?.size}]</Typography>
              <Typography
                sx={{
                  fontSize: "25",
                  justifySelf: "end",
                }}
              >
                {userBill[0]?.price.toLocaleString()} KIP X {userBill[0]?.qty} UNIT
              </Typography>
              <Typography
                sx={{
                  fontSize: "30",
                  fontWeight: "bold",
                  justifySelf: "end",
                }}
              >
                {(userBill[0]?.price * userBill[0]?.qty).toLocaleString()} KIP
              </Typography>
            </Box>
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
                  {userBill.map((row,index) => {
                    const isSelected = selected.includes(row.id);
                    return (
                      <TableRow
                        key={row.id}
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
                        <TableCell>{row.price.toLocaleString()}</TableCell>
                        <TableCell>{row.qty}</TableCell>
                        <TableCell>{(row.price * row.qty).toLocaleString()}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Paper>
          </Box>
          <Box display="flex" justifyContent="end" gap={3}>
            <Typography variant="h3" fontWeight="bold" alignSelf="center">
              TOTAL
            </Typography>
            <Typography variant="h2" sx={{ alignSelf: "center", color:'red', fontWeight:'bold' }}>
              {totalSum.toLocaleString()} KIP
            </Typography>
          </Box>
        </Box>
      ) : (
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
          <Typography
            variant="h1"
            fontWeight="bold"
            style={{
              marginBottom: 0,
            }}
          >
            Welcome to Treekoff
          </Typography>
          <Typography
            sx={{
              fontFamily: "Noto Sans Lao",
              fontSize: 35,
              marginTop: 0,
              color: "rgba(0, 0, 0, 0.59)",
            }}
          >
            ຍິນດີຕ້ອນຮັບເຂົ້າສູ່ຮ້ານທຣີຄອຟ
          </Typography>
          <h2
            style={{
              alignSelf: "end",
              marginRight: 20,
              marginBottom: 0,
              fontFamily: "Noto Sans Lao",
            }}
          >
            {employeeInfo?.username}
          </h2>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "end",
            }}
          >
            <span
              style={{
                fontSize: 30,
                justifySelf: "center",
                alignSelf: "center",
              }}
            >
              🏢
            </span>
            <h3
              style={{
                alignSelf: "end",
                marginLeft: 8,
                marginRight: 20,
                fontFamily: "Noto Sans Lao",
              }}
            >
              {employeeInfo?.brach}
            </h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerDisplay;
