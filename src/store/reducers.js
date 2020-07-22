import { combineReducers } from "redux";
import { locReducer } from "./location/reducers";

export default combineReducers({
  loc: locReducer,
});
