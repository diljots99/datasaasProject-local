import { SET_PEOPLE, SET_DIRECTORS, SET_TRADING_ADDRESS , SET_TRADE, SET_INSIGHTS } from "../actions/companyActions";

const initialState = {
  People: {},
  Directors: {},
  Insights:{},
  TradingAddress:[],
  Trade:{}
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
    default: {
      return { ...state };
    }
  }
};

export default companyReduser;
