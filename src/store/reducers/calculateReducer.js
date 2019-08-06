import { create, all } from 'mathjs';

import * as types from '../types';
import calculate from '../../expressions/calculate';

const config = { };
const math = create(all, config);

const initialState = {
  expression: '',
  total: 0,

};

function setExpression({ expression, total }, action) {
  if (/[\d]*[-+%*/.]$/.exec(expression) && /[-+%*/.]/.exec(action.payload)) {
    expression = expression.slice(0, expression.length - 1);
  }

  switch (action.type) {
    case types.SET_EXPRESSION:
      if (['+', '/', '*', '%'].includes(action.payload) && !expression) {
        return `${total}${action.payload}`;
      }
      return `${!expression && total ? total : ''}${expression
        + action.payload}`;
    default:
      return expression;
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_EXPRESSION: {
      const expression = setExpression(state, action);
      console.log(expression);
      return {
        ...state,
        expression,
        total: calculate(expression),
      }; }
    case types.CLEAR_EXPRESSION:
      return {
        ...state,
        expression: '',
        total: 0,
      };
    case types.DELETE_LAST_EXPRESSION_ENTRY: {
      let exp = state.expression;
      exp = exp
        .split('')
        .slice(0, exp.length - 1)
        .join('');
      // add 0 when you del last element
      return {
        ...state,
        expression: exp,
        total: math.evaluate(exp),
      }; }
    case types.EVALUATE_EXPRESSION:
      return {
        ...state,
        expression: '',
        total: math.evaluate(state.expression),
      };
    case types.PERCENT: {
      const exp = state.expression;
      const numToPerc = exp.match(/[0-9.,]+$/)[0];
      const afterPerc = Number(numToPerc) / 100;
      const newExp = exp.replace(/[0-9.,]+$/, afterPerc);
      return {
        ...state,
        expression: newExp,
        total: math.evaluate(newExp),
      }; }
    case types.FLIP_SIGN_OPERATION: {
      const exp = state.expression;
      const lastNumb = exp.match(/([^\d])([0-9.,]+$)/);
      console.log('last number', lastNumb);
      let expAfterSlip = '';
      if (lastNumb[1] !== '-' || lastNumb[1] !== '+') {
        expAfterSlip = exp.replace(/([^\d])([0-9.,]+$)/, '$1(-$2)');
      }
      if (lastNumb[1] === '-') {
        expAfterSlip = exp.replace(/([^\d])([0-9.,]+$)/, '+$2');
      }
      if (lastNumb[1] === '+') {
        expAfterSlip = exp.replace(/([^\d])([0-9.,]+$)/, '-$2');
      }
      console.log('first try', lastNumb);
      console.log('exp after flip', expAfterSlip);
      return {
        ...state,
        expression: expAfterSlip,
        total: math.evaluate(expAfterSlip),
      }; }
    default:
      return state;
  }
};
