import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useEffect } from "react";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import { EmployeeInfo } from "../data/MockData";
import useTreekoffStorage from "../../zustand/storageTreekoff";

import { motion } from "framer-motion";

const EmployeeDetail = ({ showPanel, setShowPanel, handleSwicth }) => {
  const emplyyeeInfo = useTreekoffStorage((state) => state.employeeInfo);
  const setEmployeeInfo = useTreekoffStorage((state) => state.setEmplyeeInfo);
  const staffInfo = useTreekoffStorage((state) => state.staffInfo);

  useEffect(() => {
    setEmployeeInfo(EmployeeInfo);
  }, [EmployeeInfo]);

  console.log(showPanel);
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
        display="flex"
        flexDirection="column"
        sx={{
          height: "350px",
          bgcolor: "blue",
          borderRadius: "5px",
        }}
      >
        <Card
          sx={{
            bgcolor: "#ffffff",
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia
          onClick={handleSwicth}
            sx={{
              height: showPanel ? "80px" : "40px",
              width: showPanel ? "80px" : "40px",
              cursor:'pointer',
              borderRadius: "50%",
              marginTop: 2,
            }}
            image={
              "https://image-cdn-fa.spotifycdn.com/image/ab67706c0000d72c991b69390fcab978295d198d"
            }
            title="profile picture"
          />
          <CardContent
            sx={{
              display:showPanel ? "flex" : "none",
              flexDirection: "column",
              alignItems: "center",
              width: "90%",
              borderBottom: "1px solid black",
            }}
          >
            <Typography
              fontFamily={"Noto Sans Lao"}
              sx={{
                color: "black",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              {`${staffInfo?.first_name} ${staffInfo?.last_name} ` || "EMTY"}
            </Typography>
            <Typography
              fontFamily={"Noto Sans Lao"}
              sx={{
                color: "black",
                fontSize: 12,
              }}
            >
              {emplyyeeInfo?.position || "EMTY"}
            </Typography>
          </CardContent>
          <CardContent
            sx={{
              display: showPanel ? "flex" : "none",
              flexDirection: "column",
              alignContent: "center",
              width: "90%",
              paddingLeft: "0",
              paddingRight: "0",
            }}
          >
            <Typography
              fontFamily={"Noto Sans Lao"}
              color="black"
              fontWeight="bold"
              alignSelf={"center"}
            >
              ປະຈຳສາຂາ
            </Typography>
            <Typography
              fontFamily={"Noto Sans Lao"}
              color="rgb(0, 3, 158)"
              display="flex"
              alignSelf={"center"}
              fontWeight={"bold"}
            >
              <LocationCityIcon />
              {staffInfo?.branch?.branch_name || "EMTY"}
            </Typography>
          </CardContent>
          <CardContent
            sx={{
              display: showPanel ?"flex" : "none",
              flexDirection: "column",
              alignContent: "center",
              width: "90%",
              paddingLeft: "0",
              paddingRight: "0",
            }}
          >
            <Typography
              fontFamily={"Noto Sans Lao"}
              color="black"
              fontWeight="bold"
              alignSelf={"center"}
            >
              ແຕ້ມສະສົມພະນັກງານ
            </Typography>
            <Typography
              fontFamily={"Noto Sans Lao"}
              color="rgb(14, 124, 0)"
              display="flex"
              alignSelf={"center"}
              fontWeight={"bold"}
            >
              {emplyyeeInfo?.point.toLocaleString() || "0"}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </motion.div>
  );
};

export default EmployeeDetail;
