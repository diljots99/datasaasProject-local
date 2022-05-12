import { SET_FILTER, SET_FILTER_VALUES,CLEAR_ALL_FILTER, SET_ALL_FILTERS_TYPE, SET_SAVED_FILTERS_LIST,SET_ALL_SEARCH_RESULTS } from '../actions/filterAction'

const initialState = {
    isopen: false,
    selectedFilterValues:{}, // for the values user choose 
    filterTypeDetail : [],
    savedFilterList:[] , // for All saved search  list 
    filterSearchResults:[] // for store search results
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
                ...state, selectedFilterValues: {...state.selectedFilterValues , [val.filterName]: val.values }
            }
        }
          case CLEAR_ALL_FILTER : {
            return {
                ...state, selectedFilterValues: action.payload
            }
        }
        case SET_ALL_FILTERS_TYPE:{
            return {
                ...state, filterTypeDetail: action.payload
            }
        }
        case SET_SAVED_FILTERS_LIST:{
            return {
                ...state, savedFilterList: action.payload
            }
        }
        case SET_ALL_SEARCH_RESULTS:{
            return {
                ...state, filterSearchResults: action.payload
            }
        }
        default:
            return {...state}
    }
}
export default filterReduser