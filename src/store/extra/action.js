export const EXT_CHANGE_COLOR_TEXT = "EXT_CHANGE_COLOR_TEXT";
export const EXT_CHANGE_DATESTART_TEXT = "EXT_CHANGE_DATESTART_TEXT";
export const EXT_CHANGE_DATEFINISH_TEXT = "EXT_CHANGE_DATEFINISH_TEXT";
export const EXT_CHANGE_RATE_TEXT = "EXT_CHANGE_RATE_TEXT";
export const EXT_CHANGE_ADDITIONAL_TEXT = "EXT_CHANGE_ADDITIONAL_TEXT";

export const setColorText = (color) => ({
  type: EXT_CHANGE_COLOR_TEXT,
  payload: color,
});
export const setDateStartText = (dateStart) => ({
  type: EXT_CHANGE_DATESTART_TEXT,
  payload: dateStart,
});
export const setDateFinishText = (dateFinish) => ({
  type: EXT_CHANGE_DATEFINISH_TEXT,
  payload: dateFinish,
});
export const setRateText = (rate) => ({
  type: EXT_CHANGE_RATE_TEXT,
  payload: rate,
});
export const setAdditionalText = (additional) => ({
  type: EXT_CHANGE_ADDITIONAL_TEXT,
  payload: additional,
});
