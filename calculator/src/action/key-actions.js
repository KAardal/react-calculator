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

export const square = () => ({
  type: "SQUARE"
});

export const negative = () => ({
  type: "NEGATIVE"
});

export const percent = () => ({
  type: "PERCENT"
});

export const squareRoot = () => ({
  type: "SQUAREROOT"
});
