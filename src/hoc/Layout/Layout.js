import React, { useState, useEffect } from 'react';


import classes from './Layout.module.css';
import Calculator from '../../components/Calculator/Calculator';
import desktopImg from '../../assets/images/calc_desktop.png';


const Layout = (props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const image = windowWidth >= 650 ? `url(${desktopImg})` : 'none';

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  return (
    <div className={classes.Layout} style={{ backgroundImage: image }}>
      <Calculator {...props} />
    </div>
  );
};

export default Layout;
