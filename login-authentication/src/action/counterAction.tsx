export interface IIncrementCounterAction {
  readonly type: "INCREMENT";
}
export interface IDecrementCounterAction {
  readonly type: "DECREMENT";
}

export type CounterAction = IIncrementCounterAction | IDecrementCounterAction;
