import axios from "axios";
import { toast } from "react-toastify";
import {header} from '../../utils/authheader'

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const SET_PEOPLE = 'SET_PEOPLE'
export const SET_DIRECTORS = 'SET_DIRECTORS'
export const SET_TRADING_ADDRESS = 'SET_TRADING_ADDRESS'

export const getProple=(uuid)=>{
    return (dispatch)=>{
        axios.get(`${BASE_URL}/api/business/${uuid}/people`, header() )
        .then(res =>{
            console.log("people response ", res)
            if(res.data.status = true)
            dispatch({type: SET_PEOPLE , payload: res.data})
        }).catch(err=>console.log(err))
    }
}


export const getDirectors =(uuid)=>{
    return (dispatch)=>{
        axios.get(`${BASE_URL}/api/business/${uuid}/directors`, header() )
        .then(res =>{
            console.log("Directors response ", res)
            if(res.data.status = true)
            dispatch({type: SET_DIRECTORS , payload: res.data})
        }).catch(err=>console.log(err))
    }
}


export const getTradingAddress=(uuid)=>{
    return (dispatch)=>{
        axios.get(`${BASE_URL}/api/business/${uuid}/tradingAddress`, header() )
        .then(res =>{
            console.log("get Trading Address ", res)
            if(res.data.status = true)
            dispatch({type: SET_TRADING_ADDRESS , payload: res.data})
        }).catch(err=>console.log(err))
    }
}