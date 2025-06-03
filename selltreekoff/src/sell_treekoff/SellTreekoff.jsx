import { Box, Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import EmployeeDetail from "./component/EmployeeDetail";
import OnlineCustomer from "./component/OnlineCustomer";
import MenuDetailAndBread from "./component/MenuDetailAndBread";
import { useSocket } from "../socket-provider/SocketProvider";
import useTreekoffStorage from "../zustand/storageTreekoff";
import { onlineOrderData } from "./data/MockData";
import { motion } from "framer-motion"; // NEW
import { getMenuForBranch } from "../api/treekoff";

const SellTreekoff = () => {
  const [selectOnline, setSelectOnline] = useState(false);
  const popupRef = useRef(null);
  const socket = useSocket();
  const orderOnline = useTreekoffStorage((s) => s.orderOnline);
  const appendOrderOnline = useTreekoffStorage((s) => s.appendOrderOnline);
  const replaceOrderOnline = useTreekoffStorage((s) => s.replaceOrderOnline);
  const [showPanel, setShowPanel] = useState(true);
  const staffInfo = useTreekoffStorage((state)=>state.staffInfo)
  const setMenuForBranch = useTreekoffStorage((state)=>state.setMenuForBranch)

  const fecthMenuBranch = async ()=> {
    const res = await getMenuForBranch(staffInfo?.branch?.branch_name)
    setMenuForBranch(res.data)
  }

  useEffect(() => {
    replaceOrderOnline(onlineOrderData);
    fecthMenuBranch()
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
      <Box display="flex" width="100%" height="100%" gap="10px">
        <Box
          display="flex"
          flexDirection="column"
          width={showPanel ? "20%" : "3.5%"}
          gap="15px"
        >
          <EmployeeDetail showPanel={showPanel} setShowPanel={setShowPanel}  handleSwicth={handleSwicth}/>
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
    </Box>
  );
};

export default SellTreekoff;
