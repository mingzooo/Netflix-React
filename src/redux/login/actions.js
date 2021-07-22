import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from "./types";
import { request } from "../../utils/axios";

const USER_URL = "/api/user";

export function registerUser(dataToSubmit) {
    const data = request("post", USER_URL + "/register", dataToSubmit);
    return {
        type: REGISTER_USER,
        payload: data,
    };
}

export function loginUser(dataToSubmit) {
    // const data = request("post", USER_URL + "/login", dataToSubmit);
    // console.log(data);
    return {
        type: LOGIN_USER,
        payload: dataToSubmit,
    };
}

export function logoutUser() {
    const data = request("post", USER_URL + "/logout");

    return {
        type: LOGOUT_USER,
        payload: data,
    };
}
