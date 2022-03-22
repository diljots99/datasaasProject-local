import axios from "axios";
import { toast } from "react-toastify";
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const GET_DIRECTOR_LIST = "GET_DIRECTOR_LIST";
export const GET_DIRECTOR_DETAILS = "GET_DIRECTOR_DETAILS";
export const GET_COMPANY_LIST = "GET_COMPANY_LIST";
export const GET_COMPANY_DETAILS = "GET_COMPANY_DETAILS";
export const GET_MONITOR_COMPANY_DETAILS = "GET_MONITOR_COMPANY_DETAILS";
export const GET_MONITOR_DIRECTOR_DETAILS = "GET_MONITOR_DIRECTOR_DETAILS";
export const SET_MONITOR_COMPANY = "SET_MONITOR_COMPANY";
export const SET_MONITOR_BUSSINESS = "SET_MONITOR_BUSSINESS";
export const GET_COMPANY_NOTES = "GET_COMPANY_NOTES";
//export const GET_COMPANY_NOTES = "ADD_COMPANY_NOTES";

//---------------Director-----------------------
export const getDirectorList = () => {
  return async (dispatch) => {
    let dataToken = JSON.parse(sessionStorage.getItem("userData"));
    //  console.log("😎😋😊😋😊",dataToken.token)
    await axios
      .get(`${BASE_URL}/api/business-watch/director-records`, {
        // headers: {
        //     'Authorization': `Bearer ${dataToken.token}`
        // }
      })
      .then((res) => {
        const response = res.data;
        if (response.status === true) {
          console.log("res business-watch/director-records", response.data);
          dispatch({
            type: GET_DIRECTOR_LIST,
            payload: response.data.filter(
              (data) => data.director_watches.length === 0
            ),
          });
        }
      })
      .catch((err) => {
        console.log(err);
        // toast.error("Token Expired")
        // logout()
      });
  };
};

export const getDirectorMonitorList = (ID) => {
  let dataToken = JSON.parse(sessionStorage.getItem("userData"));
  console.log("😎😋😊😋😊", dataToken.token);
  return async (dispatch) => {
    await axios
      .get(
        `${BASE_URL}/api/business-watch/director-records-monitor?user_id=${ID}`
        //  {
        //   headers: {
        //       'Authorization': `Bearer ${dataToken.token}`
        //   }
        // }
      )
      .then((res) => {
        const response = res.data;
        if (response.status === true) {
          dispatch({
            type: GET_MONITOR_DIRECTOR_DETAILS,
            payload: response.data,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        // toast.error("Token Expired")
        // logout()
      });
  };
};

export const setMonitorDirector = (user_id, officer_id, setMonitor) => {
  let dataToken = JSON.parse(sessionStorage.getItem("userData"));
  console.log("😎😋😊😋😊", dataToken.token);
  return async (dispatch) => {
    await axios
      .post(
        `${BASE_URL}/api/business-watch/director-monitor?user_id=${user_id}&officer_id=${parseInt(
          officer_id
        )}&d_watch_status=true`,
        {
          // headers: {
          //     'Authorization': `Bearer ${dataToken.token}`
          // }
        }
      )

      .then((res) => {
        const response = res.data;
        console.log("getCompanyDetail", response);
        if (response.status === true) {
          console.log("response", response);
          dispatch(getDirectorList());
          setMonitor(true);
          // dispatch({ type: GET_MONITOR_DIRECTOR_DETAILS, payload: response.data });
        }
      })
      .catch((err) => {
        console.log(err);
        // logout()
      });
  };
};

export const getDirectorDetail = (ID) => {
  return async (dispatch) => {
    let dataToken = JSON.parse(sessionStorage.getItem("userData"));
    console.log("😎😋😊😋😊", dataToken.token);
    await axios
      .get(`${BASE_URL}/api/business-watch/director-records-by-id/${ID}`, {
        // headers: {
        //     'Authorization': `Bearer ${dataToken.token}`
        // }
      })
      .then((res) => {
        const response = res.data;
        console.log("getDirectorDetail", response);
        if (response.status === true) {
          dispatch({ type: GET_DIRECTOR_DETAILS, payload: response.data });
        }
      })
      .catch((err) => {
        console.log(err);
        // logout()
      });
  };
};

export const unSetMonitorDirector = (user_id, uuid, setMonitor) => {
  return async (dispatch) => {
    let dataToken = JSON.parse(sessionStorage.getItem("userData"));
    console.log("😎😋😊😋😊", dataToken.token);
    await axios
      .delete(
        `${BASE_URL}/api/business-watch/delete-watch-record?user_id=${user_id}&uuid=${uuid}&flag=director`,
        {
          // headers: {
          //     'Authorization': `Bearer ${dataToken.token}`
          // }
        }
      )
      .then((res) => {
        const response = res.data;
        console.log("getCompanyDetail", response);
        if (response.status === true) {
          console.log("response", response);
          setMonitor(false);
          // dispatch({ type: GET_COMPANY_DETAILS, payload: response.data });
        }
      })
      .catch((err) => {
        console.log(err);
        // logout()
      });
  };
};

//---------------Company-----------------------

export const getCompanyNotes = () => {
  return async (dispatch) => {
    let dataToken = JSON.parse(sessionStorage.getItem("userData"));
    console.log("😎😋😊dataToken.id😋😊", dataToken);
    console.log("😎😋😊dataToken.id😋😊", dataToken.id);
    await axios.get(`${BASE_URL}/api/business-watch/company-notes/${dataToken.id}`, {
        // headers: {
        //     'Authorization': `Bearer ${dataToken.token}`
        // }
      })
      .then((res) => {
        const response = res.data;
        console.log("getCompanyNotes", response);
        if (response.status === true) {
          dispatch({ type: GET_COMPANY_NOTES, payload: response.data });
        }
      })
      .catch((err) => {
        console.log(err);
        // logout()
      });
  };
};

export const getCompanyList = () => {
  return async (dispatch) => {
    let dataToken = JSON.parse(sessionStorage.getItem("userData"));
    console.log("😎😋😊😋😊", dataToken.token);
    await axios
      .get(`${BASE_URL}/api/business-watch/company-records`, {
        // headers: {
        //     'Authorization': `Bearer ${dataToken.token}`
        // }
      })
      .then((res) => {
        const response = res.data;
        if (response.status === true) {
          dispatch({
            type: GET_COMPANY_LIST,
            payload: response.data.filter(
              (data) => data.business_watches.length === 0
            ),
          });
        }
      })
      .catch((err) => {
        console.log(err);
        // toast.error("Token Expired")
        // logout()
      });
  };
};

export const getCompanyMonitorList = (ID) => {
  return async (dispatch) => {
    let dataToken = JSON.parse(sessionStorage.getItem("userData"));
    console.log("😎😋😊😋😊", dataToken.token);
    await axios
      .get(
        `${BASE_URL}/api/business-watch/company-monitor-records?user_id=${ID}`,
        {
          // headers: {
          //     'Authorization': `Bearer ${dataToken.token}`
          // }
        }
      )
      .then((res) => {
        const response = res.data;
        if (response.status === true) {
          dispatch({
            type: GET_MONITOR_COMPANY_DETAILS,
            payload: response.data,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        // toast.error("Token Expired")
        // logout()
      });
  };
};

export const addCompanyNotes = (data) => {
  return async (dispatch) => {
    await axios
      .post(`${BASE_URL}/api/business-watch/company-notes`, {
        n_company_name: data.n_company_name,
        n_text: data.n_text,
        user_id: data.user_id,
        company_id: data.company_id,
        comapany_uuid: data.comapany_uuid,
      })
      .then((res) => {
        const response = res.data;
        if (response.status === true) {
          toast.info(response.msg);
          dispatch(getCompanyDetail(data.comapany_uuid));
        } else {
          toast.warn(response.msg);
        }
      })
      .catch((err) => {
        console.log(err);
        // toast.error("Token Expired")
        // logout()
      });
  };
};

export const getCompanyDetail = (ID) => {
  return async (dispatch) => {
    let dataToken = JSON.parse(sessionStorage.getItem("userData"));
    console.log("😎😋😊😋😊", dataToken.token);
    await axios
      .get(`${BASE_URL}/api/business-watch/company-records-by-uuid/${ID}`, {
        // headers: {
        //     'Authorization': `Bearer ${dataToken.token}`
        // }
      })
      .then((res) => {
        const response = res.data;
        if (response.status === true) {
          dispatch({ type: GET_COMPANY_DETAILS, payload: response.data });
        }
      })
      .catch((err) => {
        console.log(err);
        // logout()
      });
  };
};

export const setMonitorCompany = (user_id, company_id, setMonitor) => {
  return async (dispatch) => {
    let dataToken = JSON.parse(sessionStorage.getItem("userData"));
    await axios
      .post(
        `${BASE_URL}/api/business-watch/company-monitor?user_id=${user_id}&company_id=${company_id}&b_watch_status=true`,
        {
          // headers: {
          //     'Authorization': `Bearer ${dataToken.token}`
          // }
        }
      )
      .then((res) => {
        const response = res.data;
        console.log("getCompanyDetail", response);
        if (response.status === true) {
          console.log("response", response);
          dispatch(getCompanyList());
          setMonitor(true);
          // dispatch({ type: GET_COMPANY_DETAILS, payload: response.data });
        }
      })
      .catch((err) => {
        console.log(err);
        // logout()
      });
  };
};

export const unSetMonitorCompany = (user_id, uuid, setMonitor) => {
  return async (dispatch) => {
    let dataToken = JSON.parse(sessionStorage.getItem("userData"));
    console.log("😎😋😊😋😊", dataToken.token);
    await axios
      .delete(
        `${BASE_URL}/api/business-watch/delete-watch-record?user_id=${user_id}&uuid=${uuid}&flag=business`,
        {
          // headers: {
          //     'Authorization': `Bearer ${dataToken.token}`
          // }
        }
      )
      .then((res) => {
        const response = res.data;
        if (response.status === true) {
          setMonitor(false);
          // dispatch({ type: GET_COMPANY_DETAILS, payload: response.data });
        }
      })
      .catch((err) => {
        console.log(err);
        // logout()
      });
  };
};

export const deleteCompanyNotes = (data) => {
  return async () => {
      await axios
          .delete(`${BASE_URL}/api/business-watch/company-notes`, {
              data: {
                  notes_id: data.notes_id,
                  user_id: data.user_id,
              },
          })
          .then((res) => {
              const response = res;
              console.log(res);
              if (response.status === true) {
                  toast.info(response.msg);
              } else {
                  toast.warn(response.msg);
              }
          })
          .catch((err) => {
              console.log(err);
          });
  };
};

export const getCompanySpecificDirectorList = (companyID) => {
  return async (dispatch) => {
      await axios
          .get(`${BASE_URL}/api/business-watch/director-records`)
          .then((res) => {
              const response = res.data;
              if (response.status === true) {
                  // console.log(
                  //     "res business-watch/director-records",
                  //     response.data,
                  //     response,
                  //     companyID,
                  //     "end"
                  // );
                  dispatch({
                      type: GET_DIRECTOR_LIST,
                      payload: response.data.filter((data) => {
                          return data.company_id === companyID;
                      }),
                  });
              }
          })
          .catch((err) => {
              console.log(err);
          });
  };
};