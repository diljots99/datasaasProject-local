import { SET_PEOPLE, SET_DIRECTORS, SET_TRADING_ADDRESS } from "../actions/companyActions";

const initialState = {
  People: {},
  Directors: {},
  TradingAddress:{},
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
    default: {
      return { ...state };
    }
  }
};

export default companyReduser;
