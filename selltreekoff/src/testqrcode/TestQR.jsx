import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { testBCEL } from "../api/sellTreekoff";
import { QRCodeCanvas } from "qrcode.react";

const TestQR = () => {


  const [formtoreq, setFormtoreq] = useState    ({
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormtoreq((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Box m="20px">
      <input
        type="text"
        name="description"
        value={formtoreq.description}
        onChange={handleInputChange}
        placeholder="Description"
      />
      <input
        type="number"
        name="amount"
        value={formtoreq.amount}
        onChange={handleInputChange}
        placeholder="(1 - 1000)"
        min="1"
        max="1000"
      />
      <Button variant="contained" color="error" onClick={handleForm}>
        Generate BCEL QR
      </Button>

      {qrData && (
        <Box mt={4}>
          <h3>Scan this QR code with OnePay:</h3>
          <QRCodeCanvas value={qrData.qrCode} size={256} />
          <p>Transaction ID: {qrData.transactionId}</p>
        </Box>
      )}
    </Box>
  );
};

export default TestQR;
