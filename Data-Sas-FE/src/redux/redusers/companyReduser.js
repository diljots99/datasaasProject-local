import { SET_PEOPLE, SET_DIRECTORS, SET_TRADING_ADDRESS , SET_TRADE, SET_INSIGHTS,SET_ABOUT, SET_INSIGHTS_BY_REGION,SET_INSIGHTS_BY_COUNTY } from "../actions/companyActions";

const initialState = {
  People: {},
  Directors: {},
  Insights:{},
  TradingAddress:[],
  Trade:{},
  About: {},
  InsightsByRegion: {},
  InsightsByCounty: {},
};

const companyReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_PEOPLE: {
      return {
        ...state,
        People: action.payload,
      };
    }
    case SET_DIRECTORS: {
      return {
        ...state,
        Directors: action.payload,
      };
    }
    case SET_TRADING_ADDRESS: {
        return {
          ...state,
          TradingAddress: action.payload,
        };
      }
      case SET_TRADE: {
        console.log(" Trade: action.payload" , action.payload)
        return {
          ...state,
          Trade: action.payload,
        };
      }
      case SET_INSIGHTS: {
        return {
          ...state,
          Insights: action.payload,
        };
      }
      case SET_ABOUT: {
        return {
          ...state,
          About: action.payload,
        };
      }
      case SET_INSIGHTS_BY_REGION: {
        return {
          ...state,
          InsightsByRegion: action.payload,
        };
      }
      case SET_INSIGHTS_BY_COUNTY: {
        return {
          ...state,
          InsightsByCounty: action.payload,
        };
      }
    default: {
      return { ...state };
    }
  }
};

export default companyReduser;
