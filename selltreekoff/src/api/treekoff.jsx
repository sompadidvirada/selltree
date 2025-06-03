import axios from "axios"

export const checkStaffInfo = (phone) => {
    return axios.get(`https://treekoff.com/_react/api.php?staff_info&id=${phone}`)
}

export const checkBranch = (branchId) => {
    return axios.get(`https://treekoff.com/_react/api.php?branch_info&id=${branchId}`)
}

export const searchCus = (customerId) => {
    return axios.get(`https://treekoff.com/_react/api.php?customer_info&id=${customerId}`)
}
export const LoginStaff = (phone, password) => {
    return axios.get(`https://treekoff.com/_react/api.php?staff_login&phone_number=${phone}&password=${password}`)
}

export const virifySession = (id, session) => {
    return axios.get(`https://treekoff.com/_react/api.php?login_cookie_check&id_user=${id}&cookie_session=${session}`)
}
export const getMenuForBranch = (branchId) => {
    return axios.get(`https://treekoff.com/_react/api.php?show_menu_treekoff&for_branch_id=${branchId}`)
}