
export const SET_FILTER = 'SET_FILTER'

export const setFilter = (value) =>{
   return (dispatch) =>{
        return dispatch({type:SET_FILTER , payload: value})
    }
}