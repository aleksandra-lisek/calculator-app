import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../Button/Button';
import { keypadKeys, specialKeys } from '../constants';

const KeypadStyled = styled.div`
  width: 100%;
  height: calc(5*(100%/7));

`;

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
          isSpecial={specialKeys.includes(key)}
          onButtonClick={handleClick}
        />
      );
    });
  });

  return <KeypadStyled>{buttons}</KeypadStyled>;
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
