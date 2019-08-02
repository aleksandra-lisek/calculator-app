import React from 'react';

import classes from './App.module.css';
import Screen from './components/Screen/Screen';
import Keypad from './components/Keypad/Keypad';

const app = () => (
  <div className={classes.App}>
    
    <Screen />
    <Keypad />
  </div>

);


export default app;
