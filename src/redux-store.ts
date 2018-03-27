import { createStore, compose, applyMiddleware } from "redux";
import { reducer, initialState } from "./root-reducer";

const composeEnhancers =
  // tslint:disable-next-line
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const ReduxStore = composeEnhancers(applyMiddleware())(createStore)(
  reducer,
  initialState
);
