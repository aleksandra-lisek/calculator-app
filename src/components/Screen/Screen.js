import React from 'react';
import propTypes from 'prop-types';
import { Textfit } from 'react-textfit';

import classes from './Screen.module.css';

const screen = (props) => {
  const { expression, total } = props;

  return (
    <div className={classes.Screen}>
      <Textfit
        max={24}
        throttle={60}
        mode="single"
        className={[classes.HalfScreen, classes.TopScreen].join(' ')}
      >
        <span>{expression}</span>
      </Textfit>
      <Textfit
        max={48}
        mode="single"
        className={[classes.HalfScreen, classes.BottomScreen].join(' ')}
      >
        <span>{total}</span>
      </Textfit>
    </div>
  );
};

screen.propTypes = {
  expression: propTypes.string.isRequired,
  total: propTypes.number.isRequired,
};

export default screen;
