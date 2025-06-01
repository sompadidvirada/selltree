import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useEffect } from "react";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import { EmployeeInfo } from "../data/MockData";
import useTreekoffStorage from "../../zustand/storageTreekoff";

const EmployeeDetail = () => {
  const emplyyeeInfo = useTreekoffStorage((state) => state.employeeInfo);
  const setEmployeeInfo = useTreekoffStorage((state) => state.setEmplyeeInfo);
  const staffInfo = useTreekoffStorage((state) => state.staffInfo)

  useEffect(() => {
    setEmployeeInfo(EmployeeInfo);
  }, [EmployeeInfo]);

  return (
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
          sx={{
            height: "115px",
            width: "115px",
            borderRadius: "50%",
            marginTop: 2,
          }}
          image={staffInfo?.profile_picture === "" ? staffInfo?.profile_picture : "https://image-cdn-fa.spotifycdn.com/image/ab67706c0000d72c991b69390fcab978295d198d" || ""}
          title="profile picture"
        />
        <CardContent
          sx={{
            display: "flex",
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
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
            width: "90%",
            paddingLeft: "0",
            paddingRight: "0",
          }}
        >
          <Typography fontFamily={"Noto Sans Lao"} color="black" fontWeight="bold">
            ປະຈຳສາຂາ
          </Typography>
          <Typography fontFamily={"Noto Sans Lao"} color="black" display="flex">
            <LocationCityIcon />
            {staffInfo?.branch?.branch_name || "EMTY"}
          </Typography>
        </CardContent>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
            width: "90%",
            borderBottom: "1px solid black",
            paddingLeft: "0",
            paddingRight: "0",
          }}
        >
          <Typography fontFamily={"Noto Sans Lao"} color="black" fontWeight="bold">
            ແຕ້ມສະສົມພະນັກງານ
          </Typography>
          <Typography fontFamily={"Noto Sans Lao"} color="black" display="flex">
            {emplyyeeInfo?.point.toLocaleString() || "0"}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default EmployeeDetail;
