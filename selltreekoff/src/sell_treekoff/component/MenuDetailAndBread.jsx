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
import { toast } from "react-toastify";

const MenuDetailAndBread = ({ selectOnline }) => {
  const location = useLocation();
  const userInfo = useTreekoffStorage((s) => s.userInfo);
  const customerInfo = useTreekoffStorage((s) => s.customerInfo);

  const refreshCus = () => {
    orderChannel.postMessage(userInfo);
  };

  useEffect(() => {
    if (location.pathname === "/") {
      refreshCus();
    }
  }, [location.pathname]);
  return (
    <Box
      style={{
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
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
                  backgroundColor: isActive ? "rgb(71, 37, 21)" : "transparent",
                  padding: 15,
                  borderRadius: 5,
                  color: isActive ? "rgb(255, 255, 255)" : "inherit",
                  textDecoration: "none",
                })}
              >
                <PersonIcon />
                <Typography fontFamily={"Noto Sans Lao"}>
                  ເຂົ້າຊູ່ສະມາຊິກລູກຄ້າ
                </Typography>
              </NavLink>
              <NavLink
                to="/sellpage/productdetail"
                onClick={(e) => {
                  if (!customerInfo || customerInfo === "") {
                    e.preventDefault();
                    toast.error("ກະລຸນາເລືອກລູກຄ້າກ່ອນ");
                  }
                }}
                style={({ isActive }) => ({
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  backgroundColor: isActive ? "rgb(71, 37, 21)" : "transparent",
                  padding: 8,
                  borderRadius: 5,
                  color: !customerInfo?.bill_id
                    ? "gray"
                    : isActive
                    ? "white"
                    : "inherit",
                  textDecoration: "none",
                  pointerEvents: !customerInfo?.bill_id ? "none" : "auto",
                  opacity: !customerInfo?.bill_id ? 0.6 : 1,
                })}
              >
                <LocalAtmIcon />
                <Typography fontFamily={"Noto Sans Lao"}>
                  ລາຍການບິນສິນຄ້າ
                </Typography>
              </NavLink>
              <NavLink
                to="/sellpage/checkbill"
                onClick={(e) => {
                  if (!customerInfo?.detail) {
                    e.preventDefault();
                    toast.error("ກະລຸນາເລືອກລາຍການກ່ອນ");
                  }
                }}
                style={({ isActive }) => ({
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  backgroundColor: isActive ? "rgb(71, 37, 21)" : "transparent",
                  padding: 8,
                  borderRadius: 5,
                  color:
                    !customerInfo?.detail ||
                    !customerInfo ||
                    customerInfo?.detail?.length === 0
                      ? "gray"
                      : isActive
                      ? "white"
                      : "inherit",
                  textDecoration: "none",
                  pointerEvents:
                    !customerInfo?.detail ||
                    !customerInfo ||
                    customerInfo?.detail?.length === 0
                      ? "none"
                      : "auto",
                  opacity: !customerInfo?.detail ? 0.6 : 1,
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
    </Box>
  );
};

export default MenuDetailAndBread;
