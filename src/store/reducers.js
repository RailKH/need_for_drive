import { combineReducers } from "redux";
import { locReducer } from "./location/reducers";
import { modReducer } from "./model/reducers";
import { extReducer } from "./extra/reducers";
// import { sendReducer } from "./files_to_send/reducers";

export default combineReducers({
  loc: locReducer,
  mod: modReducer,
  ext: extReducer,
  // send: sendReducer,
});
