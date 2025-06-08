import { Box, Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import EmployeeDetail from "./component/EmployeeDetail";
import OnlineCustomer from "./component/OnlineCustomer";
import MenuDetailAndBread from "./component/MenuDetailAndBread";
import { useSocket } from "../socket-provider/SocketProvider";
import useTreekoffStorage from "../zustand/storageTreekoff";
import { onlineOrderData } from "./data/MockData";
import { motion } from "framer-motion"; // NEW
import { getMenuForBranch, getOrderOnline, getTypeMenu } from "../api/treekoff";

const SellTreekoff = () => {
  const setOrderOnline2 = useTreekoffStorage((s)=>s.setOrderOnline2)
  const [selectOnline, setSelectOnline] = useState(false);
  const popupRef = useRef(null);
  const socket = useSocket();
  const appendOrderOnline = useTreekoffStorage((s) => s.appendOrderOnline);
  const replaceOrderOnline = useTreekoffStorage((s) => s.replaceOrderOnline);
  const [showPanel, setShowPanel] = useState(true);
  const staffInfo = useTreekoffStorage((state) => state.staffInfo);
  const setMenuForBranch = useTreekoffStorage(
    (state) => state.setMenuForBranch
  );
  const menuForBranch = useTreekoffStorage((state) => state.menuForBranch);
  const [typeMenu, setTypeMenu] = useState();
  const [getMen, setGetMen] = useState();

  const fecthMenuBranch = async () => {
    const res = await getMenuForBranch(1);
    const menuData = res.data.data;
    const typeMenus = await getTypeMenu();
    const typeData = typeMenus.data.data;

    // Step 1: Merge menu items with type info
    const productWithType = menuData.map((menuItem) => {
      const matchType = typeData.find(
        (type) => type.id_type === menuItem.typeID
      );
      return {
        ...menuItem,
        typeNameLao: matchType?.typeTitle || "",
        typeNameEng: matchType?.typeTitleENG || "",
      };
    });

    // Step 2: Group by typeNameEng
    const groupedByType = productWithType.reduce((acc, item) => {
      const key = item.typeNameEng || "UNKNOWN";
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(item);
      return acc;
    }, {});

    // Save to Zustand or state
    setMenuForBranch(groupedByType);
  };

  const fecthOrderOnline = async () => {
    try {
      const brnachID = 1; /** this much be id of staff */
      const respone = await getOrderOnline(brnachID);
      setOrderOnline2(respone.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    replaceOrderOnline(onlineOrderData);
    fecthOrderOnline();
    fecthMenuBranch();
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
          width={showPanel ? "25%" : "3.5%"}
          gap="15px"
        >
          <EmployeeDetail
            showPanel={showPanel}
            setShowPanel={setShowPanel}
            handleSwicth={handleSwicth}
          />
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
