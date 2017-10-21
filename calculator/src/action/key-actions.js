export const concat = keyValue => ({
  type: "CONCAT",
  payload: keyValue
});

export const evaluate = () => ({
  type: "EVAL"
});

export const clear = () => ({
  type: "CLEAR"
});

export const backspace = () => ({
  type: "BACKSPACE"
});
