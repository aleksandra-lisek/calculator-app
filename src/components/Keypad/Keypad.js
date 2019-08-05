import React from 'react';
import propTypes from 'prop-types';

import Button from '../Button/Button';
import classes from './Keypad.module.css';


const keypad = (props) => {
  const keypadKeys = [
    ['c', '+/-', '%', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', 'DEL', '='],
  ];

  const handleClick = (key) => {
    switch (key) {
      case 'c':
        props.clear();
        break;
      case 'DEL':
        props.delete();
        break;
      case '=':
        props.evaluate();
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
};

export default keypad;
