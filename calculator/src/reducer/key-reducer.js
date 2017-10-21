export default (state = "", action) => {
  let { type, payload } = action;
  switch (type) {
    case "CONCAT":
      return state + payload;
    case "EVAL":
      return eval(state);
    case "CLEAR":
      return "";
    case "BACKSPACE":
      return state.toString().slice(0, state.length - 1);
    default:
      return state;
  }
};
