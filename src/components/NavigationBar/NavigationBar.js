import React from 'react';
import { AppBar, Button, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './NavigationBar.scss';

const NavigationBar = (props) => {
  const navLinksData = [
    {
      label: 'Home',
      href: '/home',
    },
    {
      label: 'Table View',
      href: '/table-view',
    },
  ];

  const navActionsData = [
    {
      label: 'Login',
    },
  ];

  const getNavigationLinks = () => {
    return navLinksData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            to: href,
            component: Link,
          }}
          className='navLink'
        >
          {label}
        </Button>
      );
    });
  };

  const getNavigationActions = () => {
    return navActionsData.map(({ label }) => {
      return <Button className='navAction'>{label}</Button>;
    });
  };

  const displayDesktop = () => {
    return (
      <Toolbar>
        <div className='navLinks'>{getNavigationLinks()}</div>
        <div className='navActions'>{getNavigationActions()}</div>
      </Toolbar>
    );
  };

  return (
    <div className='NavigationBar'>
      <AppBar className='header'>{displayDesktop()}</AppBar>
    </div>
  );
};

export default NavigationBar;
