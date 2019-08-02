/* eslint no-undef: 0 */ // --> OFF
import React from 'react';
import classes from './Button.module.css';


const button = (props) => {

  const { buttonKey } = props;

  return (
    <button
      className={classes.Button}
      type="button"
    >
      {buttonKey}
    </button>
  );
};

// button.propTypes = {
//   buttonKey: PropTypes.string.isRequired,
//   onButtonClick: PropTypes.func.isRequired,
// };

export default button;
