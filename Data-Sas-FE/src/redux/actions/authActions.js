import axios from "axios";
import { toast } from "react-toastify";
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const USER_UPDATE = "USER_UPDATE";
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const login = (email, password) => {
  console.log("BASE_URL  ", BASE_URL);
  return async (dispatch) => {
    await axios
      .post(`${BASE_URL}/api/user//user-login`, {
        u_email: email,
        u_password: password,
      })
      .then((res) => {
        console.log("res ", res.data);
        const response = res.data;
        if (response.msg === "Login credentials are invalid") {
          toast.warn("User not exist");
        }
        if (response.msg === "The password is incorrect") {
          toast.warn(response.msg);
        }
        if (response.status === true) {
          toast.info(
            `Welcome Back ${response.data.u_first_name} ${response.data.u_last_name}`
          );
          sessionStorage.setItem(
            "userData",
            JSON.stringify({ ...response.data, token: response.token })
          );
          dispatch({
            type: LOG_IN,
            payload: { ...response.data, token: response.token },
          });
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("NETWORK ERROR");
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch({ type: LOG_OUT });
  };
};

export const updateUser = (req, prevData) => {
  return async (dispatch) => {
    await axios
      .put(`${BASE_URL}/api/user//user`, req )
      .then((res) => {
        const response = res.data;

        if (response.message) {
          toast.warn("Something want wrong");
        }
        if (response.status === true) {
          toast.success("Profile Updated");
          sessionStorage.setItem(
            "userData",
            JSON.stringify({ ...prevData, ...req })
          );
          dispatch({ type: USER_UPDATE, payload: { ...prevData, ...req } });
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Token Expired");
        logout();
      });
  };
};

export const changePassword = (req, prevData) => {
  return async (dispatch) => {
    await axios
      .post(`${BASE_URL}/api/user//user-change-password`, req)
      .then((res) => {
        const response = res.data;

        if (response.status === false) {
          toast.warn(response.msg);
        }
        if (response.status === true) {
      
          toast.success(response.message);
          sessionStorage.setItem(
            "userData",
            JSON.stringify({ ...response.data, token: prevData.token })
          );
          dispatch({
            type: USER_UPDATE,
            payload: { ...prevData, ...response.data },
          });
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("NETWORK ERROR");
      });
  };
};
