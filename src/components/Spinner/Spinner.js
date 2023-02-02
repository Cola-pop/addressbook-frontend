import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

import './Spinner.scss';

const Spinner = (props) => {
  return props.show ? (
    <>
      <div className='backdrop'></div>
      <ClipLoader
        color={'#3f51b5'}
        loading={true}
        size={150}
        aria-label='Loading Spinner'
        data-testid='loader'
        className='loader'
      />
    </>
  ) : null;
};

export default Spinner;
