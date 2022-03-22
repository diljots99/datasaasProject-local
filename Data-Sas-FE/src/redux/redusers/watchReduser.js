import {
  GET_DIRECTOR_LIST,
  GET_DIRECTOR_DETAILS,
  GET_COMPANY_LIST,
  GET_COMPANY_DETAILS,
  GET_MONITOR_COMPANY_DETAILS,
  GET_MONITOR_DIRECTOR_DETAILS,
  GET_COMPANY_NOTES
} from "../actions/watchAction";

const initialState = {
  directorList: [],
  companyList: [],
  directorDetail: {},
  companyDetail: {},
  directorMonitorList: [],
  companyNotes:[],
  companyMonitorList: [],
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
      }
    }
    default:
      return state;
  }
};
export default watchReducer;
