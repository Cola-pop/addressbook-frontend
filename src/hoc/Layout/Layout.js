import React, { Fragment } from 'react';

import NavigationBar from '../../components/NavigationBar/NavigationBar';

const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <Fragment>
        <NavigationBar />
        {children}
      </Fragment>
    </>
  );
};

export default Layout;
