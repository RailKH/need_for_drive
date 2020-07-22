import { LOC_CHANGE_CITY_TEXT, LOC_CHANGE_CITYPOINT_TEXT } from "./action";
const defaultState = {
  valueCity: "",
  valueOfPoint: "",
};

export const locReducer = (state = defaultState, action) => {
  console.log(state);
  switch (action.type) {
    case LOC_CHANGE_CITY_TEXT:
      return {
        ...state,
        valueCity: action.payload,
      };
    case LOC_CHANGE_CITYPOINT_TEXT:
      return {
        ...state,
        valueOfPoint: action.payload,
      };
  }
  return state;
};
