import {combineReducers} from 'redux';
import courses from './courseReducer';

export const rootReducer =combineReducers({
    courses
});

//export default rootReducer;