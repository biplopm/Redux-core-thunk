import { DECREMENT, INCREMENT, RESET, SET } from "./actionTypes";
import initialState from "./initialState";


const counterReduccer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
        return state +1;
    case DECREMENT:
        return state -1;
    case RESET:
        return 0;
    case SET:
        return 1500;
    default:
      return state;
  }
};

export default counterReduccer;
