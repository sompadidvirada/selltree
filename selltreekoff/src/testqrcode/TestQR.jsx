import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { checkPayment, testBCEL } from "../api/sellTreekoff";
import { QRCodeCanvas } from "qrcode.react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const TestQR = () => {
  const navigate = useNavigate();
  const secretKey =
    "$2a$10$LhIoUy7iI6YWn/qWT23gE.Zcl3c6xYu6AhU2uCR2tCb06E318CjKe";

  const [formtoreq, setFormtoreq] = useState({
    amount: "",
    description: "",
  });

  const [qrData, setQrData] = useState(null);

  const handleForm = async () => {
    try {
      const payload = {
        amount: Number(formtoreq.amount),
        description: formtoreq.description,
        secretKey:
          "$2a$10$LhIoUy7iI6YWn/qWT23gE.Zcl3c6xYu6AhU2uCR2tCb06E318CjKe",
      };
      console.log("Sending amount:", typeof payload.amount, payload.amount);

      const response = await testBCEL(payload);
      console.log("QR Response:", response.data);
      setQrData(response.data);
    } catch (err) {
      console.error("API Error:", err);
    }
  };

  const handleCheckPayment = async () => {
    try {
      if (!qrData.transactionId) {
        return toast.error("ບໍ່ມີລາຍການກວດສອບ");
      }
      const check = await checkPayment(qrData.transactionId, secretKey);
      console.log(check);
      if (check?.data?.data?.status === "PAYMENT_COMPLETED") {
        navigate("/success");
      } else {
        return toast.error("ກະລຸນຸຊຳລະກ່ອນ");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormtoreq((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Box m="20px">
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <input
          style={{ alignSelf: "center", height: "20px" }}
          type="text"
          name="description"
          value={formtoreq.description}
          onChange={handleInputChange}
          placeholder="Description"
        />
        <input
          style={{ alignSelf: "center", height: "20px" }}
          type="number"
          name="amount"
          value={formtoreq.amount}
          onChange={handleInputChange}
          placeholder="(1 - 1000)"
          min="1"
          max="1000"
        />
        <Button
          variant="contained"
          color="error"
          onClick={handleForm}
          style={{ alignSelf: "center", height: "25px" }}
        >
          Generate BCEL QR
        </Button>
      </Box>
      <Box display={"flex"} flexDirection={"column"}>
        {qrData && (
          <Box mt={1} style={{ alignSelf: "center"}} sx={{ display:'flex', flexDirection:'column'}}>
            <h5 style={{ alignSelf:'center'}}>Scan this QR code with OnePay:</h5>
            <QRCodeCanvas style={{ alignSelf:'center'}} value={qrData.qrCode} size={100} />
            <p style={{ fontSize:12}}>Transaction ID: {qrData.transactionId}</p>
          </Box>
        )}
        {qrData && (
          <Box style={{ alignSelf: "center"}}>
            <h5>Check Payment</h5>
            <Button
              onClick={handleCheckPayment}
              variant="contained"
              color="success"
              sx={{ fontFamily: "Noto Sans Lao" }}
            >
              ກວດສອບ
            </Button>
          </Box>
        )}
      </Box>

      <ToastContainer position="top-center"/>
    </Box>
  );
};

export default TestQR;
