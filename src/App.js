import React from 'react';
import { connect } from 'react-redux';

import classes from './App.module.css';
import Screen from './components/Screen/Screen';
import Keypad from './components/Keypad/Keypad';
import * as fromCalculator from './store/storeIndex';
import {
  calculate, deleteLastEntry, clear, evaluateExpression, percent, flipSignOperation,
} from './store/actions/calculate';

export class App extends React.PureComponent {
  render() {
    return (
      <div className={classes.App}>
        <Screen {...this.props} />
        <Keypad {...this.props} />
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    expression: fromCalculator.getExpression(state),
    total: fromCalculator.getTotal(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    calculate: (buttonKey) => {
      dispatch(calculate(buttonKey));
    },
    delete: () => {
      dispatch(deleteLastEntry());
    },
    clear: () => {
      dispatch(clear());
    },
    evaluate: () => {
      dispatch(evaluateExpression());
    },
    percent: () => {
      dispatch(percent());
    },
    flipSignOperation: () => {
      dispatch(flipSignOperation());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
