import { SET_FILTER } from '../actions/filterAction'

const initialState = {
    isopen: false,
    
}

const filterReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER: {
            return {
                ...state, isopen: action.payload
            }
        }

        default:
            return state
    }
}
export default filterReduser