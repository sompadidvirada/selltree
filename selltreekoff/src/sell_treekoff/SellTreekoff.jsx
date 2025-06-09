import { Box, Button, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import EmployeeDetail from "./component/EmployeeDetail";
import OnlineCustomer from "./component/OnlineCustomer";
import MenuDetailAndBread from "./component/MenuDetailAndBread";
import { useSocket } from "../socket-provider/SocketProvider";
import useTreekoffStorage from "../zustand/storageTreekoff";
import { getMenuForBranch, getOrderOnline, getTypeMenu } from "../api/treekoff";
import LogoutIcon from "@mui/icons-material/Logout";
import { Dialog, DialogTitle, DialogActions } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SellTreekoff = () => {
  const setOrderOnline2 = useTreekoffStorage((s) => s.setOrderOnline2);
  const [selectOnline, setSelectOnline] = useState(false);
  const popupRef = useRef(null);
  const socket = useSocket();
  const [showPanel, setShowPanel] = useState(true);
  const staffInfo = useTreekoffStorage((state) => state.staffInfo);
  const setMenuForBranch = useTreekoffStorage(
    (state) => state.setMenuForBranch
  );
  const menuForBranch = useTreekoffStorage((state) => state.menuForBranch);
  const [typeMenu, setTypeMenu] = useState();
  const [getMen, setGetMen] = useState();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

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


  const handleSwicth = () => {
    setShowPanel((prev) => !prev);
  };

  const handleLogout = () => {
    setOpen(true); // open custom confirm modal
  };

  const confirmLogout = () => {
    navigate("/");
    useTreekoffStorage.getState().logout();
    localStorage.removeItem("sellTreekoff-storege2");
    setOpen(false);
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
          <Box sx={{ alignSelf: "center", mt: 2 }}>
            <Button
              variant="contained"
              onClick={handleLogout}
              color="error"
              sx={{ display: "flex", gap: 1, p: 2 }}
            >
              <LogoutIcon />
              <Typography sx={{ fontFamily: "Noto Sans Lao", fontSize: 20 }}>
                ອອກຈາກລະບົບ
              </Typography>
            </Button>
          </Box>
        </Box>
        <MenuDetailAndBread
          selectOnline={selectOnline}
          showPanel={showPanel}
          setShowPanel={setShowPanel}
        />
      </Box>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: "30%",
            height: "200px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          },
        }}
      >
        <DialogTitle sx={{ fontFamily: "Noto Sans Lao", fontSize:35, alignSelf:'center' }}>
          ຕ້ອງການອອກຈາກລະບົບແທ້ບໍ່ ??
        </DialogTitle>
        <DialogActions sx={{ alignSelf: "center", display: "flex", gap: 5 }}>
          <Button
            sx={{ fontFamily: "Noto Sans Lao", fontSize: 30 }}
            variant="contained"
            onClick={() => setOpen(false)}
          >
            ຍົກເລີກ
          </Button>
          <Button
            sx={{ fontFamily: "Noto Sans Lao", fontSize: 30 }}
            variant="contained"
            onClick={confirmLogout}
            color="error"
          >
            ຕົກລົງ
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default SellTreekoff;
