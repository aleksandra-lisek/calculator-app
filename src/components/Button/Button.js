import React from 'react';
import propTypes from 'prop-types';

import classes from './Button.module.css';
import { specialKeys } from '../constants';

class Button extends React.PureComponent {

  render() {
    const { buttonKey, onButtonClick } = this.props;
    const handleClick = (e) => { onButtonClick(e.target.textContent); };
    const classNames = [
      classes.Button,
      specialKeys.includes(buttonKey) ? classes.SpecialButton : classes.RegularButton,
    ];
    return (
      <button
        className={classNames.join(' ').trim()}
        onClick={handleClick}
        type="button"
      >
        {buttonKey}
      </button>
    );
  }
}

Button.propTypes = {
  buttonKey: propTypes.string.isRequired,
  onButtonClick: propTypes.func.isRequired,
};

export default Button;
