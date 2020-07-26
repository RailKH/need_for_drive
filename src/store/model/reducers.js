import { MOD_CHANGE_CAR_TEXT } from "./action";
const defaultState = {
  selectCar: "",
};

export const modReducer = (state = defaultState, action) => {
  console.log(state);
  switch (action.type) {
    case MOD_CHANGE_CAR_TEXT:
      return {
        ...state,
        selectCar: action.payload,
      };
  }
  return state;
};
