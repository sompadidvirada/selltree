import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import EmployeeDetail from "./component/EmployeeDetail";
import OnlineCustomer from "./component/OnlineCustomer";
import MenuDetailAndBread from "./component/MenuDetailAndBread";
import { useSocket } from "../socket-provider/SocketProvider";
import useTreekoffStorage from "../zustand/storageTreekoff";

const SellTreekoff = () => {
  const [selectOnline, setSelectOnline] = useState(false);
  const popupRef = useRef(null);
  const socket = useSocket();
  const orderOnline = useTreekoffStorage((s)=>s.orderOnline)
  const setOrderOnline = useTreekoffStorage((s)=>s.setOrderOnline)

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
    openWindow();
  }, []);


  useEffect(() => {
    if (!socket) return;

    socket.on("online-order", (data) => {
      setOrderOnline(data)
    });

    return () => {
      socket.off("online-order");
    };
  }, [socket]);

  console.log(orderOnline)

  return (
    <Box
      sx={{
        width: "98.5%",
        bgcolor: "#e4e4e4",
        margin: "15px",
        overflow: "hidden",
        p: "18px",
        margin: 0,
      }}
    >
      <Box display="flex" width="100%" height="100%" gap="30px">
        <Box display="flex" flexDirection="column" width="32%" gap="15px">
          <EmployeeDetail />
          <OnlineCustomer
            setSelectOnline={setSelectOnline}
            openWindow={openWindow}
          />
        </Box>
        <MenuDetailAndBread selectOnline={selectOnline}/>
      </Box>
    </Box>
  );
};

export default SellTreekoff;
