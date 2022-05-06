import { SET_FILTER, SET_FILTER_VALUES,CLEAR_ALL_FILTER } from '../actions/filterAction'

const initialState = {
    isopen: false,
    FilterValues:{}
    
}

const filterReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER: {
            return {
                ...state, isopen: action.payload
            }
        }
        case SET_FILTER_VALUES: {
            const val = action.payload
            console.log({state , val})
            return {
                ...state, FilterValues: {...state.FilterValues , [val.filterName]: val.values }
            }
        }  case CLEAR_ALL_FILTER : {
            return {
                ...state, FilterValues: action.payload
            }
        }

        default:
            return {...state}
    }
}
export default filterReduser