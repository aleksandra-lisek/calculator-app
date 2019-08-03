/* eslint no-undef: 0 */ // --> OFF
import React from 'react';
import classes from './Button.module.css';


const button = (props) => {
  const { buttonKey, onButtonClick } = props;
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
};


export default button;
