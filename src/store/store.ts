import { createStore, applyMiddleware, compose } from "redux";
import reduxThunkWare from "redux-thunk";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(() => {},
composeEnhancers(applyMiddleware(reduxThunkWare)));

export { store };
