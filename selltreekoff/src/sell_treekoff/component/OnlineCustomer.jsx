import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import MonitorIcon from "@mui/icons-material/Monitor";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { useEffect, useRef, useState } from "react";
import useTreekoffStorage from "../../zustand/storageTreekoff";

const OnlineCustomer = ({ setSelectOnline, openWindow }) => {
  const [getNoti, setGetNoti] = useState(0);

  const orderOnline = useTreekoffStorage((s) => s.orderOnline);
  const prevLengthRef = useRef(orderOnline?.length || 0);
  // Count how many orders are waiting
  const waitingCount =
    orderOnline?.filter((order) => order.orderStatus === "ລໍຖ້າຮັບ").length ||
    0;

  useEffect(() => {
    const currentLength = orderOnline?.length || 0;
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
          }}
        >
          <MonitorIcon
            sx={{
              alignSelf: "center",
              marginRight: 1,
            }}
          />
          <Typography fontFamily={"Noto Sans Lao"} sx={{ fontSize: 20 }}>
            ເລືອກໜ້າຕ່າງການຂາຍ
          </Typography>
        </CardContent>
        <CardContent
          sx={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            borderBottom: "1px solid black",
            width: "90%",
          }}
        >
          <Button
            onClick={() => openWindow()}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              gap: 20,
              width: "100%",
              height: "100%",
            }}
          >
            <CardMedia
              sx={{ height: 50, width: 74 }}
              image="/assests/TK.png"
              title="TREEKOFF"
            />
            <Typography
              fontSize={23}
              color="black"
              fontWeight="bold"
              sx={{
                display: "flex",
                color: "blue",
              }}
            >
              {" "}
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
          }}
        >
          <Button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              gap: 20,
              width: "100%",
              height: "100%",
            }}
            onClick={() => setSelectOnline(false)}
          >
            <CardMedia
              sx={{ height: 50, width: 74 }}
              image="/assests/TK.png"
              title="TREEKOFF"
            />
            <Typography
              fontSize={23}
              color="black"
              fontWeight="bold"
              sx={{
                display: "flex",
                color: "blue",
              }}
            >
              {" "}
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
          }}
        >
          <Button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              gap: 20,
              width: "100%",
              height: "100%",
            }}
            onClick={() => setSelectOnline(true)}
          >
            <CardMedia
              sx={{ height: 50, width: 74 }}
              image="/assests/TK.png"
              title="TREEKOFF"
            />
            <Typography
              fontSize={23}
              color="black"
              fontWeight="bold"
              sx={{
                display: "flex",
                color: "blue",
              }}
            >
              <PhoneAndroidIcon /> TREEKOFF(ONLINE){" "}
               {waitingCount > 0 && (
                <span
                  style={{
                    color: "white",
                    padding: "2px 8px",
                    backgroundColor: "red",
                    borderRadius: "12px",
                    fontSize: "14px",
                    marginLeft: "6px",
                    alignSelf:'center'
                  }}
                >
                  {waitingCount}
                </span>
              )}
            </Typography>
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default OnlineCustomer;
