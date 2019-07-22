import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reporter from "./middleware/reporter";

import Reducer from "./reducers";

/**
 * Object that combines reducers
 * @description A redux aspect that combines all reducers
 */

let reducers = combineReducers({
  resty: Reducer
});

const store = () =>
  createStore(reducers, composeWithDevTools(applyMiddleware(reporter, thunk)));

export default store;
