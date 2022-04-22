import {
    GET_DIRECTOR_LIST,
    GET_DIRECTOR_DETAILS,
    GET_COMPANY_LIST,
    GET_COMPANY_DETAILS,
    GET_MONITOR_COMPANY_DETAILS,
    GET_MONITOR_DIRECTOR_DETAILS,
    GET_COMPANY_NOTES,
    GET_TRADING_DETAILS,
    GET_KEYNOTE_DETAILS,
    GET_COMPANY_CONTACT_DETAIL,
} from "../actions/watchAction";

const initialState = {
    directorList: [],
    companyList: [],
    directorDetail: {},
    companyDetail: {},
    directorMonitorList: [],
    companyNotes: [],
    getkeynotedetails:[],
    companyMonitorList: [],
    tradingDetail: [],
    companyContactDetail: [],
};

const watchReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DIRECTOR_LIST: {
            return {
                ...state,
                directorList: action.payload,
            };
        }
        case GET_COMPANY_NOTES: {
            return {
                ...state,
                companyNotes: action.payload,
            };
        }
        case GET_DIRECTOR_DETAILS: {
            return {
                ...state,
                directorDetail: action.payload,
            };
        }
        case GET_COMPANY_LIST: {
            return {
                ...state,
                companyList: action.payload,
            };
        }
        case GET_COMPANY_DETAILS: {
            return {
                ...state,
                companyDetail: action.payload,
            };
        }
        case GET_MONITOR_COMPANY_DETAILS: {
            return {
                ...state,
                companyMonitorList: action.payload,
            };
        }
        case GET_MONITOR_DIRECTOR_DETAILS: {
            return {
                ...state,
                directorMonitorList: action.payload,
            };
        }
        case GET_TRADING_DETAILS: {
            return {
                ...state,
                tradingDetail: action.payload,
            };
        }
        case GET_COMPANY_CONTACT_DETAIL: {
            return {
                ...state,
                companyContactDetail: action.payload,
            };
        }
        case GET_KEYNOTE_DETAILS: {
            return {
                ...state,
                getkeynotedetails: action.payload,
            };
        }
        default:
            return state;
    }
};
export default watchReducer;
