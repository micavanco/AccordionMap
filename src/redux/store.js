import { createStore, bindActionCreators, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const allActions = bindActionCreators(
  {},
  store.dispatch
);

window.store = store;

export { store, allActions };
