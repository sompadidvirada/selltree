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
  return await axios.delete(`${envUrl}/deletebill/${billId}`)
}