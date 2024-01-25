import { applyMiddleware, createStore } from "redux";
import rootReduccer from "./rootReduccer";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";

// redux middleware
const middleware = [thunk];

const store = createStore(
  rootReduccer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
