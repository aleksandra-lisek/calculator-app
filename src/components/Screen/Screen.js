/* eslint no-undef: 0 */ // --> OFF
import React from 'react';

import classes from './Screen.module.css';

const screen = (props) => {
  return (
    <div className={classes.Screen}>
      <div className={classes.TopScreen}>
        <span>10+1+2</span> 
      </div>
      <div className={classes.BottomScreen}>
       <span>100</span> 
      </div>
    </div>
  );
};

// screen.propTypes = {
//   expression: PropTypes.string.isRequired,
//   total: PropTypes.string.isRequired,
// };

export default screen;
