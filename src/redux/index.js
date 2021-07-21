import { combineReducers } from "redux";
import user from "./login/reducer";

const rootReducer = combineReducers({
    user,
});

export default rootReducer;