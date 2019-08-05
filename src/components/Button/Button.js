import React from 'react';
import propTypes from 'prop-types';

import classes from './Button.module.css';

class Button extends React.PureComponent {
  render() {
    const { buttonKey, onButtonClick } = this.props;
    const handleClick = (e) => { onButtonClick(e.target.textContent); };
    return (
      <button
        className={classes.Button}
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
  onButtonClick: propTypes.isRequired,
};

export default Button;
