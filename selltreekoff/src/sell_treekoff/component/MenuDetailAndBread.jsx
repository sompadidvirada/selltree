import { Box, Breadcrumbs, Card, CardContent, Typography } from "@mui/material";
import { Outlet, Link as RouterLink, useLocation } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import { NavLink } from "react-router-dom";
import useTreekoffStorage from "../../zustand/storageTreekoff";
import { orderChannel } from "../../broadcast-channel/broadcast";
import { useEffect } from "react";
import OnlinePage from "./menu-compo/OnlinePage";

import { motion } from "framer-motion"; // NEW


const MenuDetailAndBread = ({ selectOnline }) => {
  const location = useLocation();
  const userBill = useTreekoffStorage((s) => s.userBill);
  const userInfo = useTreekoffStorage((s) => s.userInfo);

  const refreshCus = () => {
    orderChannel.postMessage(userInfo);
  };

  useEffect(() => {
    if (location.pathname === "/") {
      refreshCus();
    }
  }, [location.pathname]);
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
      style={{
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          bgcolor: "yellow",
        }}
      >
        {selectOnline ? (
          <Card
            sx={{
              bgcolor: "#ffffff",
              height: "100%",
              width: "100%",
              color: "black",
            }}
          >
            <OnlinePage />
          </Card>
        ) : (
          <Card
            sx={{
              bgcolor: "#ffffff",
              height: "100%",
              width: "100%",
              color: "black",
            }}
          >
            <Breadcrumbs
              aria-label="breadcrumb"
              sx={{
                color: "black",
                height: "60px",
                borderBottom: "1px solid black",
                width: "100%",
                display: "flex",
                alignItems: "center",
                px: 2,
              }}
            >
              <NavLink
                to="/sellpage"
                end
                onClick={refreshCus}
                style={({ isActive }) => ({
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  backgroundColor: isActive ? "green" : "transparent",
                  padding: 8,
                  borderRadius: 5,
                  color: "inherit",
                  textDecoration: "none",
                })}
              >
                <PersonIcon />
                <Typography fontFamily={"Noto Sans Lao"}>
                  ເຂົ້າຊູ່ສະມາຊິກລູກຄ້າ
                </Typography>
              </NavLink>
              <NavLink
                to="/productdetail"
                onClick={(e) => {
                  if (!userInfo?.bill) {
                    e.preventDefault();
                    toast.error("ກະລຸນາເລືອກລູກຄ້າກ່ອນ");
                  }
                }}
                style={({ isActive }) => ({
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  backgroundColor: isActive ? "green" : "transparent",
                  padding: 8,
                  borderRadius: 5,
                  color: !userInfo?.bill ? "gray" : "inherit",
                  textDecoration: "none",
                  pointerEvents: !userInfo?.bill ? "none" : "auto",
                  opacity: !userInfo?.bill ? 0.6 : 1,
                })}
              >
                <LocalAtmIcon />
                <Typography fontFamily={"Noto Sans Lao"}>
                  ລາຍການບິນສິນຄ້າ
                </Typography>
              </NavLink>
              <NavLink
                to="/checkbill"
                onClick={(e) => {
                  if (!userInfo?.bill) {
                    e.preventDefault();
                    toast.error("ກະລຸນາເລືອກລູກຄ້າກ່ອນ");
                  }
                }}
                style={({ isActive }) => ({
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  backgroundColor: isActive ? "green" : "transparent",
                  padding: 8,
                  borderRadius: 5,
                  color:
                    !userInfo?.bill || !userBill || userBill?.length === 0
                      ? "gray"
                      : "inherit",
                  textDecoration: "none",
                  pointerEvents:
                    !userInfo?.bill || !userBill || userBill?.length === 0
                      ? "none"
                      : "auto",
                  opacity: !userInfo?.bill ? 0.6 : 1,
                })}
              >
                <FormatListBulletedIcon />
                <Typography fontFamily={"Noto Sans Lao"}>ຈ່າຍເງີນ</Typography>
              </NavLink>
            </Breadcrumbs>
            <CardContent>
              <Outlet />
            </CardContent>
          </Card>
        )}
      </Box>
    </motion.div>
  );
};

export default MenuDetailAndBread;
