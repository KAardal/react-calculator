export const concat = keyValue => ({
  type: "CONCAT",
  payload: keyValue
});

export const evaluate = keyValue => ({
  type: "EVAL",
  payload: keyValue
});

export const clear = keyValue => ({
  type: "CLEAR",
  payload: keyValue
});
