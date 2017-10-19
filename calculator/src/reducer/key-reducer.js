export default (state = "", action) => {
  let { type, payload } = action;
  switch (type) {
    case "CONCAT":
      return state + payload;
    case "EVAL":
      return eval(state);
    case "CLEAR":
      return "";
    default:
      return state;
  }
};
