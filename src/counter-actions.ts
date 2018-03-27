import { Action } from "./IAction";

export type Action = IncrementCounterAction | ResetCounter;

type IncrementCounterAction = Action<"counter / increment counter", number>;

export const incrementCounter = (delta: number): IncrementCounterAction => ({
  type: "counter / increment counter",
  payload: delta
});

type ResetCounter = Action<"counter / reset counter", {}>;

export const resetCounter = (): ResetCounter => ({
  type: "counter / reset counter",
  payload: { value: 0 }
});
