import React, { Component } from 'react';
import classes from './Layout.css';
import Screen from '../../components/Screen/Screen';
import Keypad from '../../components/Keypad/Keypad';


class Layout extends Component {
  render () {
    return (
      <div className={classes.Layout } style={{ backgroundImage: `url(${imageUrl})` }}>
        <Screen {...this.props} />
        <Keypad {...this.props} />
      </div>
    );
  };
} 

export default Layout;
