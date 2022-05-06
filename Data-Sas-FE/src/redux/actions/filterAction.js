
export const SET_FILTER = 'SET_FILTER'
export const SET_FILTER_VALUES = 'SET_FILTER_VALUES'
export const CLEAR_ALL_FILTER = 'CLEAR_ALL_FILTER'

export const setFilter = (value) =>{
   return (dispatch) =>{
        return dispatch({type:SET_FILTER , payload: value})
    }
}

export const SetFilterValues= (filterName , values) =>{
    return (dispatch)=>{
     return dispatch({type:SET_FILTER_VALUES , payload: {filterName, values}})
    }
}

export const clearAllFilter =()=>{
    return (dispatch)=>{
        return dispatch({type:CLEAR_ALL_FILTER, payload: {}})
       }
}