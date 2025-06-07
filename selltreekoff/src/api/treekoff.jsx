import axios from "axios";

export const checkStaffInfo = (phone) => {
  return axios.get(
    `https://treekoff.com/_react/api.php?staff_info&id=${phone}`
  );
};

export const checkBranch = (branchId) => {
  return axios.get(
    `https://treekoff.com/_react/api.php?branch_info&id=${branchId}`
  );
};

export const searchCus = (customerId) => {
  return axios.get(
    `https://treekoff.com/_react/api.php?customer_info&id=${customerId}`
  );
};

export const LoginStaff = (phone, password) => {
  return axios.get(
    `https://treekoff.com/_react/api.php?staff_login&phone_number=${phone}&password=${password}`
  );
};

export const virifySession = (id, session) => {
  return axios.get(
    `https://treekoff.com/_react/api.php?login_cookie_check&id_user=${id}&cookie_session=${session}`
  );
};
export const getMenuForBranch = (branchId) => {
  return axios.get(
    `https://treekoff.com/_react/api.php?show_menu_treekoff&for_branch_id=${branchId}`
  );
};
export const getTypeMenu = () => {
  return axios.get(
    `https://treekoff.com/_react/api.php?show_menu_type_treekoff`
  );
};
export const createBillWithUser = (id, staffName, branchID) => {
  return axios.get(
    `https://treekoff.com/_react/api.php?create_bill_treekoff&customer_id=${id}&staff_name=${staffName}&branch_id=${branchID}`
  );
};
export const addProductToBill = (id_menu, id_bill, qty, sweet, branchID) => {
  return axios.get(
    `https://treekoff.com/_react/api.php?add_menu_to_bill_treekoff&id_menu=${id_menu}&id_bill=${id_bill}&amountOfItem=${qty}&extraOption=${sweet}&branch_id=${branchID}`
  );
};
export const deleteProductFromBill = (id_bill_list, staff_name, branchID) => {
  return axios.get(
    `https://treekoff.com/_react/api.php?delete_menu_from_bill_treekoff&id_bill_list=${id_bill_list}&staff_name=${staff_name}&branch_id=${branchID}`
  );
};
export const getOrderOnline = (branchID) => {
  return axios.get(
    `https://treekoff.com/_react/api.php?show_online_bill_treekoff&branch_id=${branchID}`
  );
};
export const accectOrderOnline = (billID) => {
  return axios.get(
    `https://treekoff.com/_react/api.php?accept_order_online_treekoff&id_bill=${billID}`
  );
};
export const deleteBillOrderOnline = (billId) => {
  return axios.get(
    `https://treekoff.com/_react/api.php?remove_online_bill_treekoff&id_bill=${billId}`
  );
};

export const getOrderDetail = (billId) => {
  return axios.get(
    `https://treekoff.com/_react/api.php?show_menu_by_bill_treekoff&id_bill=${billId}`
  );
};
