import * as types from '../types';
import calculate from '../../expressions/calculate';

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
      return {
        ...state,
        expression: exp,
        total: calculate(exp),
      }; }
    case types.EVALUATE_EXPRESSION:
      return {
        ...state,
        expression: '',
        total: calculate(state.expression) || state.expression || state.total,
      };
    case types.PERCENT: {
      const exp = state.expression;
      const numToPerc = exp.match(/[0-9.,]+$/)[0];
      const afterPerc = Number(numToPerc) / 100;
      const newExp = exp.replace(/[0-9.,]+$/, afterPerc);
      return {
        ...state,
        expression: newExp,
        total: calculate(newExp),
      }; }
    default:
      return state;
  }
};
