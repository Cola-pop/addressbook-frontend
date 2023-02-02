import React, { useEffect, useState } from 'react';

import AddAddressSection from '../../components/AddAddressSection/AddAddressSection';
import AddressCardSection from '../../components/AddressCardSection/AddressCardSection';
import Spinner from '../../components/Spinner/Spinner';
import findAllAddressesAPI from '../../api/addresses/findAllAddresses';
import './Home.scss';

const Home = (props) => {
  const [addresses, setAddresses] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false);

  const getAddressData = async () => {
    try {
      showSpinnerHandler();
      const addressesData = await findAllAddressesAPI();
      setAddresses(addressesData.data.foundAddresses);
      hideSpinnerHandler();
    } catch (error) {
      console.log(error);
    }
  };

  const showSpinnerHandler = () => {
    setShowSpinner(true);
  };

  const hideSpinnerHandler = () => {
    setShowSpinner(false);
  };

  useEffect(() => {
    getAddressData();
  }, []);

  return (
    <div className='HomeContainer'>
      <AddAddressSection
        updateData={getAddressData}
        showSpinnerHandler={showSpinnerHandler}
      />
      <AddressCardSection
        addresses={addresses}
        updateData={getAddressData}
        showSpinnerHandler={showSpinnerHandler}
        hideSpinnerHandler={hideSpinnerHandler}
      />
      <Spinner show={showSpinner} />
    </div>
  );
};

export default Home;
