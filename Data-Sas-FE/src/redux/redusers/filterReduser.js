import { SET_FILTER, SET_FILTER_VALUES } from '../actions/filterAction'

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
        }

        default:
            return {...state}
    }
}
export default filterReduser