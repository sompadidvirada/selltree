import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  FormControl,
  Grid2,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import MonitorIcon from "@mui/icons-material/Monitor";
import { useEffect, useState } from "react";
import { products } from "../../data/MockData";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useLocation } from "react-router-dom";
import useTreekoffStorage from "../../../zustand/storageTreekoff";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { createBill } from "../../../api/sellTreekoff";
import {
  billUserChannel,
  DeleteMenu,
  orderChannel,
  paymentMethod,
} from "../../../broadcast-channel/broadcast";
import { addProductToBill, deleteProductFromBill } from "../../../api/treekoff";

const ProductDetail = () => {
  const [paymentMet, setPaymentMet] = useState("done");
  const staffInfo = useTreekoffStorage((state) => state.staffInfo);
  const menuForBranch = useTreekoffStorage((state) => state.menuForBranch);
  const navigate = useNavigate();
  const userBill = useTreekoffStorage((state) => state.userBill);
  const setUserBill = useTreekoffStorage((s) => s.setUserBill);
  const replaceUserBill = useTreekoffStorage((s) => s.replaceUserBill);
  const userInfo = useTreekoffStorage((s) => s.userInfo);
  const setUserInfo = useTreekoffStorage((s) => s.setUserInfo);
  const [searchText, setSearchText] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const data = menuForBranch || {};
  const [selected, setSelected] = useState([]);
  const [open, setOpen] = useState(false);
  const setCustomerInfo = useTreekoffStorage((s) => s.setCustomerInfo);
  const customerInfo = useTreekoffStorage((s) => s.customerInfo);
  const totalSum =
    customerInfo?.detail?.reduce((acc, row) => acc + row.price * row.qty, 0) ||
    0;

  const [selectedValue, setSelectedValue] = useState("ທຳມະດາ");
  const [quantity, setQuantity] = useState(1); // default is 1

  const categories = Object.keys(data);

  const [selectedTab, setSelectedTab] = useState(0);

  const handleClickOpen = (item) => {
    setSelectedItem(item); // store the clicked item
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setQuantity(1);
  };

  const handleSelect = (added_id) => {
    setSelected((prevSelected) =>
      prevSelected.includes(added_id)
        ? prevSelected.filter((item) => item !== added_id)
        : [...prevSelected, added_id]
    );
  };

  const handleDeleteSelected = async () => {
    try {
      const branchID = 1;
      const idsToDelete = Array.isArray(selected) ? selected : [selected];

      for (const addedId of idsToDelete) {
        await deleteProductFromBill(addedId, staffInfo?.first_name, branchID);
      }

      // Construct the new customerInfo manually
      setCustomerInfo((prev) => {
        const updatedDetail = (prev?.detail || []).filter(
          (row) => !idsToDelete.includes(row.added_id)
        );

        const updatedCustomerInfo = {
          ...prev,
          detail: updatedDetail,
        };

        // ✅ Broadcast the updated info
        DeleteMenu.postMessage(updatedCustomerInfo);

        return updatedCustomerInfo;
      });

      setSelected([]);
    } catch (error) {
      console.log(error);
    }
  };


  const handleDeleteAll = async () => {
    const branchID = 1;

    const detailList = customerInfo?.detail || [];

    try {
      for (const item of detailList) {
        await deleteProductFromBill(item.added_id, staffInfo, branchID);
      }

      // After successful deletion, clear customerInfo.detail and selected
      setCustomerInfo((prev) => ({
        ...prev,
        detail: [],
      }));

      setSelected([]);
    } catch (err) {
      console.log("Error deleting items:", err);
    }
  };

  useEffect(() => {
    if (userBill?.length > 0) {
      orderChannel.postMessage(userInfo);
      billUserChannel.postMessage(userBill);
    }
  }, []);

  const handleSubmitDialog = async (e) => {
    e.preventDefault();

    const price = Number(selectedItem?.priceOfSellKIP || 0);

    const newBill = {
      id_menu: selectedItem?.id_menu,
      menuNameENG: selectedItem?.menuNameENG || "",
      price: price,
      qty: quantity,
      cupSize: selectedItem?.cupSize,
      MenuImgSRC: selectedItem?.MenuImgSRC || null,
      sweet: selectedValue || "ທຳມະດາ",
    };

    const branchID = 1;

    try {
      const addProduct = await addProductToBill(
        newBill?.id_menu,
        customerInfo.bill_id,
        newBill?.qty,
        newBill?.sweet,
        branchID
      );

      const added_id = addProduct?.data?.data?.added_id;

      if (added_id) {
        const newBillWithID = {
          ...newBill,
          added_id: added_id,
        };

        // ✅ Just add this new item directly
        setCustomerInfo((prev = {}) => {
          const prevDetail = prev.detail || [];
          return {
            ...prev,
            detail: [newBillWithID, ...prevDetail],
          };
        });

        billUserChannel.postMessage(newBillWithID)
      } else {
        console.warn("No added_id returned from API");
      }
    } catch (err) {
      console.log(err);
    }
    // Reset form
    setSearchText("");
    setQuantity(1);
    handleClose();
  };

  const handleCheckout = () => {
    if (!customerInfo.detail || customerInfo?.detail?.length === 0) {
      toast.error("ກະລຸນາເພີ່ມລາຍການສິນຄ້າກ່ອນ.", {
        style: { fontFamily: "'Noto Sans Lao', sans-serif" },
      });
      return;
    } else {
      paymentMethod.postMessage(paymentMet);
      setPaymentMet("notdone");
      navigate("/sellpage/checkbill");
    }
  };

  useEffect(() => {
    paymentMethod.postMessage(null);
  }, []);

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      {/* Search Area */}
      <Box display="flex" alignContent="center" padding={2}>
        <SearchIcon sx={{ fontSize: 35 }} />
        <Typography
          fontFamily={"Noto Sans Lao"}
          fontSize={25}
          sx={{ alignItems: "center" }}
        >
          ຄົ້ນຫາເມນູ
        </Typography>
      </Box>
      <Box display="flex" gap="80px">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value.toLowerCase())}
          placeholder="ລະບຸຊື່ເມນູ..."
          style={{
            fontFamily: "Noto Sans Lao",
            fontSize: "20px",
            padding: "8px",
            width: "30%",
          }}
        />
        <Button
          variant="contained"
          sx={{ height: 50, bgcolor: "#00a65a" }}
          onClick={() => handleCheckout()}
        >
          <LocalAtmIcon />
          <Typography fontFamily="Noto Sans Lao" fontWeight="bold">
            CHECKOUT
          </Typography>
        </Button>
      </Box>
      <Box>
        <Box display="flex" alignContent="center" gap={2}>
          <MonitorIcon sx={{ fontSize: 35 }} />
          <Typography
            fontFamily="Noto Sans Lao"
            fontSize={25}
            sx={{ alignItems: "center" }}
          >
            ຄົ້ນຫາເມນູ
          </Typography>
        </Box>
      </Box>
      {searchText === "" ? (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap", // ✅ allows wrapping
            gap: 0, // space between tabs
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
              justifyContent: "flex-start",
            }}
          >
            {categories?.map((cat, index) => (
              <Box
                key={cat}
                onClick={() => setSelectedTab(index)}
                sx={{
                  px: 4,
                  py: 4,
                  minWidth: 190,
                  borderRadius: "8px",
                  border: "1px solid lightgray",
                  cursor: "pointer",
                  fontSize: 25,
                  fontWeight: selectedTab === index ? "bold" : "normal",
                  color: selectedTab === index ? "green" : "gray",
                  backgroundColor: selectedTab === index ? "#eaffea" : "white",
                  transition: "all 0.2s ease-in-out",
                }}
              >
                {cat}
              </Box>
            ))}
          </Box>

          {categories?.map((category, index) => (
            <TabPanel key={category} value={selectedTab} index={index}>
              <Typography sx={{ fontWeight: "bold", fontSize: 30 }}>
                Category : {category}
              </Typography>
              <Grid2 container spacing={3} mt={2}>
                {data[category].map((item, i) => (
                  <Grid2 key={`${item?.id_menu}-${i}`}>
                    <Card
                      onClick={() => handleClickOpen(item)}
                      sx={{
                        border: "1px solid rgba(1, 1, 1, 0.25)",
                        width: 220,
                        height: 370,
                      }}
                    >
                      <CardMedia
                        sx={{
                          cursor: "pointer",
                        }}
                        component="img"
                        height="200"
                        image={`https://s3-treekoff-store.s3.ap-southeast-2.amazonaws.com/treekoff-menu-${item?.id_menu}.jpg`}
                        alt={item.name}
                      />
                      <CardContent
                        sx={{
                          cursor: "pointer",
                        }}
                      >
                        <Typography variant="h6" fontSize={20}>
                          {item?.menuNameENG}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Size: {item?.cupSize}
                        </Typography>
                        <Typography variant="body1" fontSize={18} color="green">
                          {Number(item?.priceOfSellKIP || 0).toLocaleString(
                            "id-ID"
                          )}{" "}
                          KIP
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid2>
                ))}
              </Grid2>
            </TabPanel>
          ))}
        </Box>
      ) : (
        <>
          <Typography fontSize={24} fontWeight="bold" mb={2}>
            Search results for: {searchText}
          </Typography>
          <Grid2 container spacing={3}>
            {Object?.entries(menuForBranch)
              .flatMap(([category, items]) =>
                items.filter((item) =>
                  item.menuNameENG.toLowerCase().includes(searchText)
                )
              )
              .map((item, i) => (
                <Grid2 key={`${item.id}-${i}`}>
                  <Card
                    onClick={() => handleClickOpen(item)}
                    sx={{
                      border: "1px solid rgba(1, 1, 1, 0.25)",
                      width: 210,
                      height: 350,
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={`https://s3-treekoff-store.s3.ap-southeast-2.amazonaws.com/treekoff-menu-${item.id_menu}.jpg`}
                      alt={item.menuNameENG}
                      sx={{ cursor: "pointer" }}
                    />
                    <CardContent sx={{ cursor: "pointer" }}>
                      <Typography variant="h6" fontSize={20}>
                        {item.menuNameENG}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Size: {item.cupSize}
                      </Typography>
                      <Typography variant="body1" fontSize={18} color="green">
                        {Number(item.priceOfSellKIP)?.toLocaleString("id-ID")} KIP
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid2>
              ))}
          </Grid2>
        </>
      )}

      <Box>
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
                  src={customerInfo?.profile_img}
                  alt={customerInfo?.full_name}
                  style={{ width: 120, height: 120 }}
                />
                <Typography
                  fontFamily="Noto Sans Lao"
                  fontSize={20}
                  sx={{
                    alignSelf: "center",
                    marginLeft: 2,
                    fontWeight: "bold",
                  }}
                >
                  {customerInfo?.full_name}
                </Typography>
              </Box>
              <Typography variant="h5">
                CUSTOMER ID: {customerInfo?.id_list}
              </Typography>
              <Typography variant="h5">
                BILL NO : #{customerInfo?.bill_id} | TIME{" "}
                {
                  customerInfo?.bill_create_date
                    ? new Date(customerInfo.bill_create_date * 1000).toLocaleString("en-GB", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })
                    : "UNKNOW"
                }
              </Typography>
            </Box>
            {customerInfo?.detail?.length > 0 && (
              <Box>
                <Card
                  sx={{ width: 200, justifySelf: "end", marginBottom: "10" }}
                >
                  <CardMedia
                    sx={{
                      cursor: "pointer",
                    }}
                    component="img"
                    height="200px"
                    image={`https://s3-treekoff-store.s3.ap-southeast-2.amazonaws.com/treekoff-menu-${customerInfo?.detail[0]?.id_menu}.jpg`}
                    alt={"hot americano"}
                  />
                </Card>
                <Typography variant="h4" fontSize={34} fontWeight={"bold"}>
                  {customerInfo?.detail[0]?.menuNameENG}{" "}
                  {`[${customerInfo?.detail[0]?.cupSize}]`}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 30,
                    fontWeight: "bold",
                    justifySelf: "end",
                  }}
                >
                  {customerInfo?.detail[0]?.price?.toLocaleString() || 0} KIP X{" "}
                  {customerInfo?.detail[0]?.qty} UNIT
                </Typography>
                <Typography
                  sx={{
                    fontSize: 35,
                    fontWeight: "bold",
                    justifySelf: "end",
                    color: "rgb(236, 70, 70)",
                  }}
                >
                  {(
                    customerInfo?.detail[0]?.price *
                    customerInfo?.detail[0]?.qty
                  ).toLocaleString() || 0}{" "}
                  KIP
                </Typography>
              </Box>
            )}
          </Box>
          <Box display="flex" gap={2}>
            <Button
              variant="contained"
              color="error"
              onClick={handleDeleteSelected}
            >
              DELETE
            </Button>

            <Button
              variant="contained"
              color="success"
              onClick={handleDeleteAll}
              disabled={customerInfo?.detail?.length === 0}
            >
              DELETE ALL
            </Button>
          </Box>
          <Box>
            <Paper sx={{ marginTop: 4, height: 200, overflow: "auto" }}>
              <Table>
                <TableHead sx={{ backgroundColor: "rgba(0, 0, 0, 0.29)" }}>
                  <TableRow>
                    <TableCell>SELECT</TableCell>
                    <TableCell>ORDERS</TableCell>
                    <TableCell>MENU</TableCell>
                    <TableCell>SWEET</TableCell>
                    <TableCell>Price (KIP)/UNIT</TableCell>
                    <TableCell>QTY</TableCell>
                    <TableCell>TOTAL</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {customerInfo?.detail?.map((row, index) => {
                    const isSelected = selected.includes(row.added_id);
                    return (
                      <TableRow
                        key={row.added_id}
                        onClick={() => handleSelect(row.added_id)}
                        sx={{
                          cursor: "pointer",
                          backgroundColor: isSelected
                            ? "#e3f2fd"
                            : "transparent", // 🔷 highlight
                        }}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox checked={isSelected} />
                        </TableCell>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell
                          style={{
                            display: "flex",
                            alignItems: "center",
                            fontWeight: "bold",
                          }}
                        >
                          <img
                            src={`https://s3-treekoff-store.s3.ap-southeast-2.amazonaws.com/treekoff-menu-${row.id_menu}.jpg`}
                            alt={row.menuNameENG}
                            style={{
                              width: 40,
                              height: 40,
                              objectFit: "cover",
                              borderRadius: 4,
                              marginRight: 10,
                            }}
                          />
                          {row.menuNameENG}
                        </TableCell>
                        <TableCell sx={{ fontFamily: "Noto Sans Lao" }}>
                          {row.sweet}
                        </TableCell>
                        <TableCell>{row.price?.toLocaleString()}</TableCell>
                        <TableCell>{row.qty}</TableCell>
                        <TableCell>
                          {(row?.price * row?.qty).toLocaleString()}
                        </TableCell>
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
            <Typography
              variant="h2"
              sx={{ alignSelf: "center", color: "red", fontWeight: "bold" }}
            >
              {totalSum?.toLocaleString()} KIP
            </Typography>
          </Box>
        </Box>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            component: "form",
            onSubmit: handleSubmitDialog,
            sx: {
              width: "900px", // or '80vw'
              height: "80vh", // or any other size like '700px'
              maxWidth: "none", // important to disable default maxWidth
            },
          },
        }}
      >
        <DialogTitle>
          <Typography
            fontFamily={"Noto Serif Lao"}
            justifySelf={"center"}
            fontSize={25}
          >
            ເລືອກເມນູເຂົ້າບິນລູກຄ້າ ID: {customerInfo?.id_list}
          </Typography>
        </DialogTitle>
        <DialogContent sx={{ display: "flex" }}>
          <CardContent>
            <CardMedia
              sx={{
                cursor: "pointer",
              }}
              component="img"
              height="400"
              image={`https://s3-treekoff-store.s3.ap-southeast-2.amazonaws.com/treekoff-menu-${selectedItem?.id_menu}.jpg`}
              alt={selectedItem?.menuNameENG}
            />
          </CardContent>
          <Box>
            {/**TEXT HEADER SECTION */}

            <Box
              display="flex"
              flexDirection="column"
              borderBottom={"1px white solid"}
            >
              <Typography
                fontFamily={"Noto Serif Lao"}
                fontSize={25}
                alignSelf={"center"}
              >
                ໃສ່ຊື່ເມນູພາສາລາວ
              </Typography>
              <Typography fontSize={25} alignSelf={"center"}>
                {selectedItem?.menuName}
              </Typography>
              <Typography
                sx={{ color: "rgb(228, 61, 61)" }}
                fontSize={35}
                alignSelf={"center"}
                fontWeight={"bold"}
                fontFamily={"Noto Serif Lao"}
              >
                {Number(selectedItem?.priceOfSellKIP || 0).toLocaleString() +
                  "ກີບ"}
              </Typography>
            </Box>

            {/** INPUT CUP NUMBER SECTION */}

            <Box
              display="flex"
              padding={"8px"}
              gap={2}
              justifyContent={"center"}
            >
              <Typography
                fontFamily={"Noto Serif Lao"}
                fontSize={25}
                alignSelf={"center"}
              >
                ຈຳນວນ
              </Typography>
              <input
                style={{
                  fontSize: 40,
                  width: "40%",
                  height: 60,
                  fontFamily: "Noto Serif Lao",
                }}
                type="number"
                min="1" // ✅ Prevent using arrows or typing numbers less than 1
                value={quantity === null ? "" : quantity}
                onChange={(e) => {
                  const value = e.target.value;
                  // Allow empty string in input
                  if (value === "") {
                    setQuantity(null);
                  } else {
                    setQuantity(Number(value));
                  }
                }}
                onBlur={() => {
                  // On blur, reset to 1 if left empty
                  if (quantity === null || quantity === 0) {
                    setQuantity(1);
                  }
                }}
                onWheel={(e) => e.target.blur()}
              />
            </Box>

            {/**SWEET SELECT DETAIL SETION */}

            <Box
              display={"flex"}
              flexDirection={"column"}
              sx={{ borderBottom: "1px solid white", padding: "6px 0 10px 0" }}
            >
              <Typography
                fontFamily={"Noto Serif Lao"}
                alignSelf={"center"}
                fontSize={25}
              >
                ເພີ່ມເຕີມ
              </Typography>
              <FormControl fullWidth>
                <Select
                  labelId="Sweet-Detail-label"
                  id="Sweet-select"
                  sx={{
                    fontFamily: "Noto Serif Lao",
                    width: "50%",
                    alignSelf: "center",
                    fontSize: 25,
                  }}
                  value={selectedValue}
                  onChange={(e) => setSelectedValue(e.target.value)}
                >
                  <MenuItem
                    selected
                    value={"ທຳມະດາ"}
                    style={{ fontFamily: "Noto Serif Lao", fontSize: 25 }}
                  >
                    ທຳມະດາ
                  </MenuItem>
                  <MenuItem
                    value={"ຫວານຫຼາຍ"}
                    style={{ fontFamily: "Noto Serif Lao", fontSize: 25 }}
                  >
                    ຫວານຫຼາຍ
                  </MenuItem>
                  <MenuItem
                    value={"ຫວານໜ້ອຍ"}
                    style={{ fontFamily: "Noto Serif Lao", fontSize: 25 }}
                  >
                    ຫວານໜ້ອຍ
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>

            {/** TOTAL PRICE SECTION */}

            <Box
              display={"flex"}
              gap={2}
              justifyContent={"center"}
              marginTop={2}
            >
              <Typography fontFamily={"Noto Serif Lao"} fontSize={35}>
                ລວມທັງໝົດ:{" "}
              </Typography>
              <Typography
                fontFamily={"Noto Serif Lao"}
                fontSize={35}
                color="rgb(252, 62, 62)"
              >
                {(
                  Number(selectedItem?.priceOfSellKIP) * quantity
                ).toLocaleString() + " KIP"}
              </Typography>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions sx={{ display: "flex", gap: 2 }}>
          <Button
            type="submit"
            color="success"
            variant="contained"
            sx={{
              color: "rgb(0, 0, 0)",
              fontFamily: "Noto Serif Lao",
              fontSize: 35,
            }}
          >
            ສົ່ງຟອມ
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={handleClose}
            sx={{
              color: "rgb(0, 0, 0)",
              fontFamily: "Noto Serif Lao",
              fontSize: 35,
            }}
          >
            ຍົກເລີກ
          </Button>
        </DialogActions>
      </Dialog>
      <ToastContainer position="top-center" />
    </Box>
  );
};

export default ProductDetail;

// Custom TabPanel Component (like MUI docs)
function TabPanel({ children, value, index }) {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}
