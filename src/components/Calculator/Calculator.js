import React from 'react';
import { connect } from 'react-redux';

import classes from './Calculator.module.css';
import Screen from '../Screen/Screen';
import Keypad from '../Keypad/Keypad';
import * as fromCalculator from '../../store/storeIndex';
import {
  calculate, deleteLastEntry, clear, evaluateExpression, percent, flipSignOperation,
} from '../../store/actions/calculate';

const Calculator = (props) => {
  return (
    <div className={classes.Calculator}>
      <Screen {...props} />
      <Keypad {...props} />
    </div>

  );
};

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
)(Calculator);
