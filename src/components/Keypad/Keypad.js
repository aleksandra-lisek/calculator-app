import React from 'react';
import propTypes from 'prop-types';

import Button from '../Button/Button';
import { keypadKeys } from '../constants';
import classes from './Keypad.module.css';


const keypad = (props) => {
  const handleClick = (key) => {
    switch (key) {
      case 'C':
        props.clear();
        break;
      case 'DEL':
        props.delete();
        break;
      case '=':
        props.evaluate();
        break;
      case '%':
        props.percent();
        break;
      case '+/-':
        props.flipSignOperation();
        break;
      case '.':
        props.dotInput();
        break;
      case '0':
        props.dividingByZero(key);
        break;
      default:
        props.calculate(key);
    }
  };

  const buttons = keypadKeys.map((block) => {
    return block.map((key) => {
      return (
        <Button
          key={key}
          buttonKey={key}
          onButtonClick={handleClick}
        />
      );
    });
  });

  return <div className={classes.Keypad}>{buttons}</div>;
};

keypad.propTypes = {
  clear: propTypes.func.isRequired,
  delete: propTypes.func.isRequired,
  evaluate: propTypes.func.isRequired,
  calculate: propTypes.func.isRequired,
  percent: propTypes.func.isRequired,
  flipSignOperation: propTypes.func.isRequired,
  dotInput: propTypes.func.isRequired,
  dividingByZero: propTypes.func.isRequired,
};

export default keypad;
