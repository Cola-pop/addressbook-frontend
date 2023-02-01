import React from 'react';
import { AppBar, Button, Toolbar } from '@material-ui/core';
import useStyles from './styles';

const NavigationBar = (props) => {
  const classes = useStyles();

  const displayDesktop = () => {
    return (
      <Toolbar>
        <Button className={classes.button}>Home</Button>
      </Toolbar>
    );
  };

  return (
    <div>
      <AppBar className={classes.header}>{displayDesktop()}</AppBar>
    </div>
  );
};

export default NavigationBar;
