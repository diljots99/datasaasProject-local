import axios from "axios";
import { toast } from "react-toastify";
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const SET_FILTER = 'SET_FILTER'
export const SET_FILTER_VALUES = 'SET_FILTER_VALUES'
export const CLEAR_ALL_FILTER = 'CLEAR_ALL_FILTER'
export const SET_ALL_FILTERS_TYPE = 'SET_ALL_FILTERS_TYPE'
export const SET_SAVED_FILTERS_LIST = 'SET_SAVED_FILTERS_LIST'

export const setFilter = (value) =>{
   return (dispatch) =>{
        return dispatch({type:SET_FILTER , payload: value})
    }
}

export const SetselectedFilterValues= (filterName , values) =>{
    return (dispatch)=>{
     return dispatch({type:SET_FILTER_VALUES , payload: {filterName, values}})
    }
}

export const clearAllFilter =()=>{
    return (dispatch)=>{
        return dispatch({type:CLEAR_ALL_FILTER, payload: {}})
       }
}

export const getAllFilterTypes = () =>{
    return async (dispatch) => {
        await axios
          .get(`${BASE_URL}/api/filters/business-search/listAll`)
          .then((res) => {
            //  console.log("list all filter response  ",res)
            dispatch({type:SET_ALL_FILTERS_TYPE, payload: res.data.result})
          })
          .catch((err) => {
            console.log(err);
            toast.error("NETWORK ERROR");
          });
      };
}

export const saveFilterList =  (req, handleClose,history) =>{
return async (dispatch)=>{
    let dataToken = JSON.parse(sessionStorage.getItem("userData"));
    await axios
    .post(`${BASE_URL}/api/saved-searches/create`, req, {
           headers: {
              'Authorization': `Bearer ${dataToken.token}`
          }
        }
        )
    .then((res) => {
        console.log("saved-searches/create filter response  ",res)
        dispatch(getSavedFilterList())
        handleClose()
        dispatch(clearAllFilter())
        dispatch(setFilter(false))
        history.push('/saved-searches')
     // dispatch({type:SET_ALL_FILTERS_TYPE, payload: res.data.result})
    })
    .catch((err) => {
      console.log(err);
      toast.error("NETWORK ERROR");
    });
}
}

export const getSavedFilterList = ( ) =>{
    return async (dispatch)=>{
        let dataToken = JSON.parse(sessionStorage.getItem("userData"));
        await axios
        .post(`${BASE_URL}/api/saved-searches/list`, {}, {
               headers: { 
                  'Authorization': `Bearer ${dataToken.token}`
              }
            }
            )
        .then((res) => {
          //  console.log("list all filter response  ",res)
          dispatch({type:SET_SAVED_FILTERS_LIST, payload: res.data.result})
        })
        .catch((err) => {
          console.log(err);
          toast.error("NETWORK ERROR");
        });
    }
}