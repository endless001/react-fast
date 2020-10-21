import user  from "./user/index";
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';



export default combineReducers({
    user,
    routing: routerReducer
});