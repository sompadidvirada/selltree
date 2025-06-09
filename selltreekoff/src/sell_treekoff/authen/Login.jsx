import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Typography,
  Container,
  Paper,
  TextField,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { checkBranch, checkStaffInfo, LoginStaff } from "../../api/treekoff";
import { toast, ToastContainer } from "react-toastify";
import useTreekoffStorage from "../../zustand/storageTreekoff";

const Login = () => {
  const navigate = useNavigate();
  const setStaffInfo = useTreekoffStorage((s) => s.setStaffInfo);
  const setSession = useTreekoffStorage((state) => state.setSession);
  const setCustomerInfo = useTreekoffStorage((s) => s.setCustomerInfo);

  useEffect(() => {
    setCustomerInfo({});
  }, []);
  const handleFormSubmit = async (values) => {
    try {
      const identifyStaff = await LoginStaff(
        values.staffPhone,
        values.password
      );

      if (identifyStaff.data.status === "error") {
        toast.error("ເບີໂທ ຫຼື ລະຫັດບໍ່ຖືກຕ້ອງ", {
          style: {
            fontFamily: "Noto Sans Lao, sans-serif",
          },
        });
        return;
      }

      const staffID = identifyStaff.data?.id_user;

      setSession(identifyStaff.data.session);

      const staffCheck = await checkStaffInfo(staffID);

      const staffData = staffCheck.data.data[0];

      const branchDetail = await checkBranch(staffData.branch_id);

      setStaffInfo(staffData);

      setStaffInfo({ branch: branchDetail.data.data[0] });

      toast.success("CHECK");

      navigate("/sellpage");
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <Container maxWidth="xs">
      <Paper elevation={10} sx={{ margin: 8, padding: 2, width: 300, justifySelf:'center' }}>
        <img
          src="/assests/TK.png"
          alt="Logo"
          style={{
            height: 120,
            display: "block",
            margin: "16px auto",
          }}
        />
        <Typography
          component="h1"
          sx={{
            fontFamily: "Noto Sans Lao",
            justifySelf: "center",
            mb: 1,
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          ເຂົ້າສູ່ລະບົບຂາຍ
        </Typography>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={checkoutSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box>
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="ເບີໂທພະນັກງານ"
                  InputLabelProps={{
                    sx: {
                      fontFamily: "Noto Sans Lao",
                    },
                  }}
                  FormHelperTextProps={{
                    sx: { fontFamily: "Noto Sans Lao", fontSize:18 },
                  }}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.staffPhone}
                  name="staffPhone"
                  error={!!touched.staffPhone && !!errors.staffPhone}
                  helperText={touched.staffPhone && errors.staffPhone}
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="password"
                  label="ລະຫັດພະນັກງານ"
                  InputLabelProps={{
                    sx: {
                      fontFamily: "Noto Sans Lao",
                    },
                  }}
                  FormHelperTextProps={{
                    sx: { fontFamily: "Noto Sans Lao", fontSize:18 },
                  }}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  name="password"
                  error={!!touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                  sx={{ mb: 2 }}
                />
              </Box>
              <Box display="flex" justifyContent="center" mt="20px">
                <Button type="submit" variant="contained">
                  LOG IN
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Paper>
      <Box sx={{width:'100%', height:'30%', alignContent:'center'}}>
        <Typography
        sx={{
          color: "rgb(100, 100, 100)"
        }}
      >
        Copyright © 2025 BigTree Trading. All rights reserved.
      </Typography>
      </Box>
      
      <ToastContainer position="top-center" />
    </Container>
  );
};

const checkoutSchema = yup.object().shape({
  staffPhone: yup.string().required("ກະລຸນາເພີ່ມຂໍ້ມູນ"),
  password: yup.string().required("ກະລຸນາເພີ່ມຂໍ້ມູນ"),
});

const initialValues = {
  staffPhone: "",
  password: "",
};

export default Login;
