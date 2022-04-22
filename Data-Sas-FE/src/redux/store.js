import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

// Redusers
import authReduser from './redusers/authReduser'
import watchReducer from './redusers/watchReduser';
import filterReduser from './redusers/filterReduser'

const rootReducer = combineReducers({
    auth: authReduser,
    watch:watchReducer,
    filter: filterReduser
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store