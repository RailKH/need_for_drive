import { combineReducers } from "redux";
import { locReducer } from "./location/reducers";
import { modReducer } from "./model/reducers";

export default combineReducers({
  loc: locReducer,
  mod: modReducer,
});
