export default (state = "", action) => {
  let { type, payload } = action;
  switch (type) {
    case "CONCAT":
      return state + payload;
    case "EVAL":
      console.log(parseInt(state));
      return eval(state);
    case "CLEAR":
      return "";
    case "BACKSPACE":
      return state.toString().slice(0, state.length - 1);
    case "SQUAREROOT":
      return Math.sqrt(parseInt(state));
    case "SQUARE":
      return eval(state * state);
    case "PERCENT":
      return eval(state / 100);
    case "NEGATIVE":
      if (parseInt(state) === 0) return state;
      return state * -1;
    default:
      return state;
  }
};
