export default (state = "", action) => {
  let { type, payload } = action;
  switch (type) {
    case "CONCAT":
      return state + payload;
    case "EVAL":
      console.log(state[state.length - 1]);
      console.log(parseInt(state[state.length - 1], 10));
      console.log(parseInt(state[state.length - 1], 10) === NaN);
      // this ensures that the evaluation ends in a number
      if (
        parseInt(state[state.length - 1], 10) || state[state.length - 1] === "0"
      )
        return eval(state);
      return state;
    case "CLEAR":
      return "";
    case "BACKSPACE":
      return state.toString().slice(0, state.length - 1);
    case "SQUAREROOT":
      return Math.sqrt(parseInt(state, 10));
    case "SQUARE":
      return eval(state * state);
    case "PERCENT":
      return eval(state / 100);
    case "NEGATIVE":
      if (parseInt(state, 10) === 0) return state;
      return state * -1;
    default:
      return state;
  }
};
