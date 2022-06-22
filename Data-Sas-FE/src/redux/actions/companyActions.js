import axios from "axios";
import { toast } from "react-toastify";
import {header} from '../../utils/authheader'

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const SET_PEOPLE = 'SET_PEOPLE'
export const SET_DIRECTORS = 'SET_DIRECTORS'
export const SET_TRADING_ADDRESS = 'SET_TRADING_ADDRESS'
export const SET_TRADE = "SET_TRADE"
export const SET_INSIGHTS = "SET_INSIGHTS"
export const SET_ABOUT = "SET_ABOUT"
export const SET_INSIGHTS_BY_REGION = "SET_INSIGHTS_BY_REGION"
export const SET_INSIGHTS_BY_COUNTY = "SET_INSIGHTS_BY_COUNTY"

export const getProple=(uuid)=>{
    return (dispatch)=>{
        axios.get(`${BASE_URL}/api/business/${uuid}/people`, header() )
        .then(res =>{
            console.log("people response ", res)
            if(res.data.status === true)
            dispatch({type: SET_PEOPLE , payload: res.data})
        }).catch(err=>console.log(err))
    }
}


export const getDirectors =(uuid)=>{
    return (dispatch)=>{
        axios.get(`${BASE_URL}/api/business/${uuid}/directors`, header() )
        .then(res =>{
            console.log("Directors response ", res)
            if(res.data.status === true)
            dispatch({type: SET_DIRECTORS , payload: res.data})
        }).catch(err=>console.log(err))
    }
}


export const getTradingAddress=(uuid)=>{
    return (dispatch)=>{
        axios.get(`${BASE_URL}/api/business/${uuid}/tradingAddress`, header() )
        .then(res =>{
            console.log("get Trading Address ", res.data)
            if(res.data.status === true)
            dispatch({type: SET_TRADING_ADDRESS , payload: res.data.result})
        }).catch(err=>console.log(err))
    }
}

export const getTrade=(uuid)=>{
    return (dispatch)=>{
        axios.get(`${BASE_URL}/api/business/${uuid}/trade`, header() )
        .then(res =>{
            // console.log("get Trade", res , res.data.result)
           
            if(res.data.status === true)
            dispatch({type: SET_TRADE , payload: res.data.result.trade})
        }).catch(err=>console.log(err))
    }
}

export const getAbout=(uuid)=>{
    return (dispatch)=>{
        axios.get(`${BASE_URL}/api/business/${uuid}/overview/about`, header() )
        .then(res =>{
            // console.log("get about", res , res.data.result)
           
            if(res.data.status === true)
            dispatch({type: SET_ABOUT , payload: res.data.result})
        }).catch(err=>console.log(err))
    }
}


// for Insights 
export const getInsights =()=>{
    return (dispatch)=>{
        axios.post(`${BASE_URL}/api/insights`, {},header() )
        .then(res =>{
             console.log("get INDSIGHTS", res )
           
            if(res.data.status === true)
            dispatch({type: SET_INSIGHTS , payload: res.data})
        }).catch(err=>console.log(err))
    }
}

export const getInsightsByRegions =()=>{
    return (dispatch)=>{
        axios.post(`${BASE_URL}/api/insights/companiesByRegion`, {},header() )
        .then(res =>{
             console.log("get INDSIGHTS by companiesByRegion", res )
           
            if(res.data.status === true)
            dispatch({type: SET_INSIGHTS_BY_REGION , payload: res.data.result.companiesByRegion})
        }).catch(err=>console.log(err))
    }
}

export const getInsightsByCounty =()=>{
    return (dispatch)=>{
        axios.post(`${BASE_URL}/api/insights/companiesByCounty`, {},header() )
        .then(res =>{
             console.log("get INDSIGHTS by ByCounty ", res )
           
            if(res.data.status === true)
            dispatch({type: SET_INSIGHTS_BY_COUNTY , payload: res.data.result.companiesByCounty})
        }).catch(err=>console.log(err))
    }
}