import {combineReducers} from 'redux';
import auth from './Auth/AuthReducer';

const rootReducer = combineReducers({
    auth,
});

export default rootReducer;
