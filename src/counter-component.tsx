import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import { incrementCounter, resetCounter } from "./counter-actions";
import { State as RootState } from "./root-reducer";

interface OwnProps {
  label: string;
}

interface ConnectedState {
  counter: { value: number };
}

interface ConnectedDispatch {
  increment: (n: number) => void;
  reset: () => void;
}

interface OwnState {}

class CounterComponent extends React.Component<
  ConnectedState & ConnectedDispatch & OwnProps,
  OwnState
> {
  _onClickIncrement = () => {
    this.props.increment(1);
  };

  _resetCounter = () => {
    this.props.reset();
  };

  render() {
    const { counter, label } = this.props;
    return (
      <div>
        <label>{label}</label>
        <pre>
          counter = {counter.value}
          <button onClick={this._onClickIncrement}>Click me!</button>
          <button onClick={this._resetCounter}>Reset</button>
        </pre>
      </div>
    );
  }
}

const mapStateToProps = (
  state: RootState,
  ownProps: OwnProps
): ConnectedState => ({
  counter: state.counter
});

const mapDispatchToProps = (
  dispatch: Dispatch<RootState>
): ConnectedDispatch => ({
  increment: (n: number) => {
    dispatch(incrementCounter(n));
  },
  reset: () => {
    dispatch(resetCounter());
  }
});

export const Counter: React.ComponentClass<OwnProps> = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterComponent);
