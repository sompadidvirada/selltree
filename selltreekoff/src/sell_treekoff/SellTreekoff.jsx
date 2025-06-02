import { Box, Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import EmployeeDetail from "./component/EmployeeDetail";
import OnlineCustomer from "./component/OnlineCustomer";
import MenuDetailAndBread from "./component/MenuDetailAndBread";
import { useSocket } from "../socket-provider/SocketProvider";
import useTreekoffStorage from "../zustand/storageTreekoff";
import { onlineOrderData } from "./data/MockData";
import { motion } from "framer-motion"; // NEW

const SellTreekoff = () => {
  const [selectOnline, setSelectOnline] = useState(false);
  const popupRef = useRef(null);
  const socket = useSocket();
  const orderOnline = useTreekoffStorage((s) => s.orderOnline);
  const appendOrderOnline = useTreekoffStorage((s) => s.appendOrderOnline);
  const replaceOrderOnline = useTreekoffStorage((s) => s.replaceOrderOnline);
  const [showPanel, setShowPanel] = useState(true);

  useEffect(() => {
    replaceOrderOnline(onlineOrderData);
  }, []);

  const openWindow = () => {
    if (!popupRef.current || popupRef.current.closed) {
      const customerWindow = window.open(
        "/screencustomer",
        "Customer Display",
        "width=800,height=800,left=1000,top=100"
      );
      popupRef.current = customerWindow;
    }
  };

  useEffect(() => {
    {
      /**openWindow();*/
    }
  }, []);

  useEffect(() => {
    if (!socket) return;

    socket.on("online-order", (data) => {
      appendOrderOnline(data);
    });

    return () => {
      socket.off("online-order");
    };
  }, [socket]);

  const handleSwicth = () => {
    setShowPanel((prev) => !prev);
  };

  return (
    <Box
      sx={{
        width: "98.5%",
        bgcolor: "#e4e4e4",
        p: "18px",
        margin: 0,
      }}
    >
      <Box display="flex" width="100%" height="100%" gap="30px">
        <Box
          display="flex"
          flexDirection="column"
          width={showPanel ? "15%" : "5%"}
          gap="15px"
        >
          <EmployeeDetail showPanel={showPanel} setShowPanel={setShowPanel} />
          <OnlineCustomer
            setSelectOnline={setSelectOnline}
            openWindow={openWindow}
            showPanel={showPanel}
            setShowPanel={setShowPanel}
          />
        </Box>
        <MenuDetailAndBread
          selectOnline={selectOnline}
          showPanel={showPanel}
          setShowPanel={setShowPanel}
        />
      </Box>
      <Box
        sx={{
          position: "fixed",
          top: "40%",
          left: 10,
          transform: "translateY(-50%)",
          zIndex: 1000,
        }}
      >
        <Button
          variant="contained"
          onClick={handleSwicth}
          sx={{
            bgcolor: showPanel ? "rgba(25, 118, 210, 0.4)" : undefined, // default MUI blue with 0.5 opacity
            "&:hover": {
              bgcolor: showPanel ? "rgba(25, 118, 210, 0.7)" : undefined, // slightly darker on hover
            },
          }}
        >
          +
        </Button>
      </Box>
    </Box>
  );
};

export default SellTreekoff;
