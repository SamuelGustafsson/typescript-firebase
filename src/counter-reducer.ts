import { Action } from "./counter-actions";
import { State, initialState } from "./counter-state";

export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case "counter / increment counter":
      return { ...state, value: action.payload };

    case "counter / reset counter":
      return { ...state, value: 0 };

    default:
      return state;
  }
}
