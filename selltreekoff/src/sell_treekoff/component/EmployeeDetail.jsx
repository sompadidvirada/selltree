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

  return (
    <Box
      style={{
        width: "100%",
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          height: "240px",
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
              cursor: 'pointer',
              borderRadius: "50%",
              marginTop: 2,
            }}
            image={staffInfo?.profile_picture || ""}
            title="profile picture"
          />
          <CardContent
            sx={{
              display: showPanel ? "flex" : "none",
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
              {staffInfo?.staff_position || "EMTY"}
            </Typography>
          </CardContent>
          <CardContent
            sx={{
              display: showPanel ? "flex" : "none",
              width: "90%",
              paddingLeft: "0",
              paddingRight: "0",
              justifyContent:"center"
            }}
          >
            <Typography
              fontFamily={"Noto Sans Lao"}
              color="rgb(71, 71, 71)"
              display="flex"
              fontWeight={"bold"}
            >
              <LocationCityIcon sx={{color:"gray"}}/>
              {staffInfo?.branch?.branch_name || "EMTY"}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default EmployeeDetail;
