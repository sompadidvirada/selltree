import axios from "axios";

const Username = import.meta.env.VITE_API_USER_ADMIN;
const Password = import.meta.env.VITE_API_PASSWORD_ADMIN;
const token = btoa(`${Username}:${Password}`); // Base64 encode

console.log(Username,Password,token)

export const checkStaffInfo = (phone, password) => {
  return axios.get(
    `https://treekoff.com/_react/api.php?staff_login&phone_number=${phone}&password=${password}`,
    {
      headers: {
        Authorization: `Basic ${token}`,
      },
    }
  );
};


export const checkBranch = (branchId) => {
  return axios.get(
    `https://treekoff.com/_react/api.php?branch_info&id=${branchId}`,
    {
      headers: {
        Authorization: `Basic ${token}`,
      },
    }
  );
};


export const searchCus = (customerId) => {
  return axios.get(
    `https://treekoff.com/_react/api.php?customer_info&id=${customerId}`,
    {
      headers: {
        Authorization: `Basic ${token}`
      }
    }
  );
};

export const LoginStaff = (phone, password) => {
  return axios.get(
    `https://treekoff.com/_react/api.php?staff_login&phone_number=${phone}&password=${password}`, {
      headers: {
        Authorization: `Basic ${token}`
      }
    }
  );
};

export const virifySession = (id, session) => {
  return axios.get(
    `https://treekoff.com/_react/api.php?login_cookie_check&id_user=${id}&cookie_session=${session}`, {
      headers: {
        Authorization: `Basic ${token}`
      }
    }
  );
};
export const getMenuForBranch = (branchId) => {
  return axios.get(
    `https://treekoff.com/_react/api.php?show_menu_treekoff&for_branch_id=${branchId}`, {
      headers: {
        Authorization: `Basic ${token}`
      }
    }
  );
};
export const getTypeMenu = () => {
  return axios.get(
    `https://treekoff.com/_react/api.php?show_menu_type_treekoff`, {
      headers: {
        Authorization: `Basic ${token}`
      }
    }
  );
};
export const createBillWithUser = (id, staffName, branchID) => {
  return axios.get(
    `https://treekoff.com/_react/api.php?create_bill_treekoff&customer_id=${id}&staff_name=${staffName}&branch_id=${branchID}`, {
      headers: {
        Authorization: `Basic ${token}`
      }
    }
  );
};
export const addProductToBill = (id_menu, id_bill, qty, sweet, branchID) => {
  return axios.get(
    `https://treekoff.com/_react/api.php?add_menu_to_bill_treekoff&id_menu=${id_menu}&id_bill=${id_bill}&amountOfItem=${qty}&extraOption=${sweet}&branch_id=${branchID}`, {
      headers: {
        Authorization: `Basic ${token}`
      }
    }
  );
};
export const deleteProductFromBill = (id_bill_list, staff_name, branchID) => {
  return axios.get(
    `https://treekoff.com/_react/api.php?delete_menu_from_bill_treekoff&id_bill_list=${id_bill_list}&staff_name=${staff_name}&branch_id=${branchID}`, {
      headers: {
        Authorization: `Basic ${token}`
      }
    }
  );
};
