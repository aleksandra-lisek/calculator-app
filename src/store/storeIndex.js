/* eslint no-underscore-dangle: 0 */
import { createStore, combineReducers } from 'redux';
import calculateReducer from './reducers/calculateReducer';

const rootReducer = combineReducers({
  calculator: calculateReducer,
});

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export const getExpression = (state) => {
  return state.expression;
};

export const getTotal = (state) => {
  return state.total;
};
