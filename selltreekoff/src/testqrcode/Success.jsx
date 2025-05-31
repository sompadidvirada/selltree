import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {

    const navigate = useNavigate()

    const handleRedirect = ()=>{
        navigate("/testqr")
    }
  return (
    <div>
      <h2>Success Payment</h2>
      <Button variant="contained" color="success" onClick={handleRedirect}>GO BACK</Button>
    </div>
  );
};

export default Success;
