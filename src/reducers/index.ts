import { combineReducers } from "redux";
import { userReducer } from "./user/index";

export const rootReducer = combineReducers({
    userState: userReducer
});