import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

// Redusers
import authReduser from './redusers/authReduser'
import watchReducer from './redusers/watchReduser';

const rootReducer = combineReducers({
    auth: authReduser,
    watch:watchReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store