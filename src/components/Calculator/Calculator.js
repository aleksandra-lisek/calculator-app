import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';


import Screen from '../Screen/Screen';
import Keypad from '../Keypad/Keypad';
import * as fromCalculator from '../../store/storeIndex';
import {
  calculate,
  deleteLastEntry,
  clear,
  evaluateExpression,
  percent,
  flipSignOperation,
  dotInput,
  dividingByZero,
} from '../../store/actions/calculate';

const CalculatorStyled = styled.div`
width: 100vw;
height: 100vh;

@media (min-width: 650px) {
        width: 370px;
        height: 560px;
        -webkit-box-shadow: 0px 0px 69px -16px rgba(0,0,0,0.73);
        -moz-box-shadow: 0px 0px 69px -16px rgba(0,0,0,0.73);
        box-shadow: 0px 0px 69px -16px rgba(0,0,0,0.73);
}

`;
const Calculator = (props) => {
  return (
    <CalculatorStyled>
      <Screen {...props} />
      <Keypad {...props} />
    </CalculatorStyled>

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
    dotInput: () => {
      dispatch(dotInput());
    },
    dividingByZero: () => {
      dispatch(dividingByZero());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Calculator);
