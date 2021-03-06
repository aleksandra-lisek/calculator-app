import * as types from '../types';

export const calculate = (key) => {
  return {
    type: types.SET_EXPRESSION,
    payload: key,
  };
};


export const clear = () => {
  return {
    type: types.CLEAR_EXPRESSION,
  };
};

export const deleteLastEntry = () => {
  return {
    type: types.DELETE_LAST_EXPRESSION_ENTRY,
  };
};


export const evaluateExpression = () => {
  return {
    type: types.EVALUATE_EXPRESSION,
  };
};

export const percent = () => {
  return {
    type: types.PERCENT,
  };
};

export const flipSignOperation = () => {
  return {
    type: types.FLIP_SIGN_OPERATION,
  };
};

export const dotInput = () => {
  return {
    type: types.DOT_INPUT,
  };
};

export const dividingByZero = (key) => {
  return {
    type: types.DIVIDING_BY_ZERO,
    payload: key,
  };
};
