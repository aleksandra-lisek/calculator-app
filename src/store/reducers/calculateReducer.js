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
      return {
        ...state,
        expression,
        total: calculate(expression) || state.total,
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
      const newTotal = (exp.length === 0) ? 0 : math.evaluate(exp);
      // add 0 when you del last element
      return {
        ...state,
        expression: exp,
        total: newTotal,
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
      const lastNumb = exp.match(/(\()([^\d]|)([0-9.,]+)(\)$)|([^\d]|)([0-9.,]+$)/);
      let expAfterSlip = '';
      if (lastNumb[1] === '(') {
        expAfterSlip = exp.replace(/(\()([^\d]|)([0-9.,]+)(\)$)|([^\d]|)([0-9.,]+$)/, '$3');
      }
      if ((lastNumb[5] !== '-' && lastNumb[5] !== undefined) || (lastNumb[5] !== '+' && lastNumb[5] !== undefined)) {
        expAfterSlip = exp.replace(/(\()([^\d]|)([0-9.,]+)(\)$)|([^\d]|)([0-9.,]+$)/, '$5(-$6)');
      }
      if (lastNumb[5] === '-') {
        expAfterSlip = exp.replace(/(\()([^\d]|)([0-9.,]+)(\)$)|([^\d]|)([0-9.,]+$)/, '+$6');
      }
      if (lastNumb[5] === '+') {
        expAfterSlip = exp.replace(/(\()([^\d]|)([0-9.,]+)(\)$)|([^\d]|)([0-9.,]+$)/, '-$6');
      }

      return {
        ...state,
        expression: expAfterSlip,
        total: math.evaluate(expAfterSlip),
      }; }
    case types.DOT_INPUT: {
      const exp = state.expression;
      let newExp = exp;
      if (!newExp.includes('.')) {
        newExp += '.';
      }
      return {
        ...state,
        expression: newExp,
        total: math.evaluate(newExp),
      }; }
    case types.DIVIDING_BY_ZERO: {
      const exp = state.expression;
      const newExp = `${exp}0`;
      let newTotal = '';
      if (newExp.includes('/0')) {
        newTotal = "Don't divide by ZERO!";
      } else {
        newTotal = math.evaluate(newExp);
      }
      return {
        ...state,
        expression: newExp,
        total: newTotal,
      }; }
    default:
      return state;
  }
};
