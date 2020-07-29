import {
  EXT_CHANGE_COLOR_TEXT,
  EXT_CHANGE_DATESTART_TEXT,
  EXT_CHANGE_DATEFINISH_TEXT,
  EXT_CHANGE_RATE_TEXT,
  EXT_CHANGE_ADDITIONAL_TEXT,
} from "./action";

const defaultState = {
  color: "",
  dateStart: "",
  dateFinish: "",
  rate: "",
  additional: [],
};

export const extReducer = (state = defaultState, action) => {
  switch (action.type) {
    case EXT_CHANGE_COLOR_TEXT:
      return {
        // ...state,
        color: action.payload,
      };
    case EXT_CHANGE_DATESTART_TEXT:
      return {
        ...state,
        dateStart: action.payload,
      };
    case EXT_CHANGE_DATEFINISH_TEXT:
      return {
        ...state,
        dateFinish: action.payload,
      };
    case EXT_CHANGE_RATE_TEXT:
      return {
        ...state,
        rate: action.payload,
      };
    case EXT_CHANGE_ADDITIONAL_TEXT:
      return {
        ...state,
        additional: action.payload,
      };
  }
  return state;
};
