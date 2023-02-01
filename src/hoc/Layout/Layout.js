import React, { Fragment } from 'react';

import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Footer from '../../components/Footer/Footer';

const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <Fragment>
        <NavigationBar />
        {children}
        {/* <Footer /> */}
      </Fragment>
    </>
  );
};

export default Layout;
