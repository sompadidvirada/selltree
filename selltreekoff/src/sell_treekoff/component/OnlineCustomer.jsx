import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import MonitorIcon from "@mui/icons-material/Monitor";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { useEffect, useRef, useState } from "react";
import useTreekoffStorage from "../../zustand/storageTreekoff";
import CoffeeMakerIcon from "@mui/icons-material/CoffeeMaker";
import ScreenshotMonitorIcon from "@mui/icons-material/ScreenshotMonitor";

const OnlineCustomer = ({
  setSelectOnline,
  openWindow,
  showPanel
}) => {
  const [getNoti, setGetNoti] = useState(0);

  const orderOnline = useTreekoffStorage((s) => s.orderOnline);
  const orderOnline2 = useTreekoffStorage((s)=>s.orderOnline2)

  const prevLengthRef = useRef(orderOnline2?.length || 0);
  // Count how many orders are waiting
  const waitingCount =
    orderOnline2?.filter((order) => order.isAcceptByStaff === "0").length ||
    0;

  useEffect(() => {
    const currentLength = orderOnline2?.length || 0;
    const prevLength = prevLengthRef.current;

    if (currentLength > prevLength) {
      
      // Only play sound if new order(s) were added
      setGetNoti((prev) => prev + 1);


      const audio = new Audio("/noti.wav");
      audio.play().catch((e) => {
        console.warn("Sound couldn't play automatically:", e);
      });
    }

    // Update previous length reference
    prevLengthRef.current = currentLength;
  }, [orderOnline]);

  return (
    <Box
      style={{
        width: "100%",
      }}
    >
      <Box
        sx={{
          bgcolor: "green",
          height: "350px",
          borderRadius: "5px",
        }}
      >
        <Card
          sx={{
            bgcolor: "#ffffff",
            height: "100%",
            width: "100%",
            color: "black",
            gap: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              borderBottom: "1px solid black",
              width: "90%",
              height: "10%",
              p: 0,
            }}
          >
            <MonitorIcon
              sx={{
                alignSelf: "center",
                marginRight: 1,
                fontSize:15,
                color:'gray',
                display: showPanel ? "block" : "none"
              }}
            />
            <Typography
              fontFamily={"Noto Sans Lao"}
              sx={{ fontSize: 15, color:'gray', alignSelf:'center' }}
              display={showPanel ? "block" : "none"}
            >
              ເລືອກໜ້າຕ່າງການຂາຍ
            </Typography>
          </CardContent>
          <CardContent
            sx={{
              display: "flex",
              borderBottom: "1px solid black",
              width: "90%",
              p: 0,
              height: "30%",
            }}
          >
            <Button
              onClick={() => openWindow()}
              style={{
                display: "flex",
                justifyContent:"flex-start",
                gap: 2,
                color: "black",
                width: "100%",
                height: "100%",
              }}
            >
              <ScreenshotMonitorIcon />
              <Typography
                fontSize={23}
                display={showPanel ? "block" : "none"}
                fontFamily={"Noto Sans Lao"}
                fontWeight={"bold"}
              >
                CUSTOMER SCREEN
              </Typography>
            </Button>
          </CardContent>
          <CardContent
            sx={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              borderBottom: "1px solid black",
              width: "90%",
              p: 0,
              height: "30%",
            }}
          >
            <Button
              style={{
                display: "flex",
                justifyContent: "flex-start",
                gap: 2,
                color: "black",
                width: "100%",
                height: "100%",
              }}
              onClick={() => setSelectOnline(false)}
            >
              <CoffeeMakerIcon sx={{ alignSelf: "center" }} />
              <Typography
                fontSize={23}
                display={showPanel ? "block" : "none"}
                fontFamily={"Noto Sans Lao"}
                fontWeight={"bold"}
              >
                TREEKOFF
              </Typography>
            </Button>
          </CardContent>
          <CardContent
            sx={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              borderBottom: "1px solid black",
              width: "90%",
              p: 0,
              height: "30%",
            }}
          >
            <Button
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                flexDirection: showPanel ? "row" : "column",
                gap: 2,
                color: "black",
                width: "100%",
                height: "100%",
              }}
              onClick={() => setSelectOnline(true)}
            >
              <PhoneAndroidIcon sx={{ alignSelf: "center" }} />
              <Typography
                fontSize={23}
                display={showPanel ? "block" : "none"}
                fontFamily={"Noto Sans Lao"}
                fontWeight={"bold"}
              >
                TREEKOFF ONLINE{" "}
              </Typography>
              {waitingCount > 0 && (
                <span
                  style={{
                    color: "white",
                    padding: "2px 8px",
                    backgroundColor: "red",
                    borderRadius: "12px",
                    fontSize: "14px",
                    marginLeft: "6px",
                    alignSelf: "center",
                  }}
                >
                  {waitingCount}
                </span>
              )}
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default OnlineCustomer;
