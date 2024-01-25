import { TODO_ADD, TODO_DELETE,TODO_UPDATE } from "./actionTypes";
import initialState from "./initialState";

const todoReduccer = (state = initialState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return [...state, action.payload];

    case TODO_DELETE:
      return [state.filter((id) => id !== action.payload)];
    case TODO_UPDATE:
      state[state.indexOf(action.payload.old)] = action.payload.new;
      return state;
    default:
      return state;
  }
};

export default todoReduccer;
