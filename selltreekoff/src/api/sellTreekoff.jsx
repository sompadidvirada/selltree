import axios from "axios";
const envUrl = import.meta.env.VITE_API_URL;

export const registerUser = async (form) => {
  return await axios.post(`${envUrl}/createusertreekoff`, form);
};

export const getUser = async (id) => {
  return await axios.get(`${envUrl}/getuser/${id}`);
};

export const createBill = async (userId) => {
  return await axios.post(`${envUrl}/createbill`, { userId });
};

export const deleteBill = async (billId) => {
  return await axios.delete(`${envUrl}/deletebill/${billId}`);
};

export const createWaitOrder = async (brachId) => {
  return await axios.post(`${envUrl}/createwaitorder`, { brachId });
};

export const testBCEL = async ({ amount, description, secretKey }) => {
  const url = `https://payment-gateway.lailaolab.com/v1/api/payment/generate-bcel-qr?amount=${encodeURIComponent(amount)}&description=${encodeURIComponent(description)}`;
  
  const data = new URLSearchParams({
    amount,
    description
  });

  const config = {
    headers: {
      secretKey: secretKey,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };

  return axios.post(url, data, config);
};

export const checkPayment = async (tranId, secretkey) => {
  return axios.get(`https://payment-gateway.lailaolab.com/v1/api/link/payment-status/${tranId}`, {
    headers: {
      secretKey: secretkey
    }
  })
}