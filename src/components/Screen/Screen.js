import React from 'react';
import propTypes from 'prop-types';

import classes from './Screen.module.css';

const screen = (props) => {
  const { expression, total } = props;

  return (
    <div className={classes.Screen}>
      <div className={[classes.HalfScreen, classes.TopScreen].join(' ')}>
        <span>{expression}</span>
      </div>
      <div className={[classes.HalfScreen, classes.BottomScreen].join(' ')}>
        <span>{total}</span>
      </div>
    </div>
  );
};

screen.propTypes = {
  expression: propTypes.string.isRequired,
  total: propTypes.number.isRequired,
};

export default screen;
