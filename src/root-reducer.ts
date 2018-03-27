import * as counter from "./counter-state";
import { Action as counterAction } from "./counter-actions";
import { reducer as counterReducer } from "./counter-reducer";

export interface State {
  readonly counter: counter.State;
}

export const initialState: State = {
  counter: counter.initialState
};

export const reducer = (state: State, action: counterAction): State => ({
  counter: counterReducer(state.counter, action as counterAction)
});
