/* eslint no-undef: 0 */ // --> OFF
import React from 'react';

import Button from '../Button/Button';
import classes from './Keypad.module.css';


const keypad = () => {
  const keypadKeys = [
    ['c', '+/-', '%', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', 'DEL', '='],
  ];



  const buttons = keypadKeys.map((block) => {
    return block.map(key => (
      <Button
        key={key}
        buttonKey={key}
      />
    ));

  });

  return <div className={classes.Keypad}>{buttons}</div>;
};

export default keypad;
