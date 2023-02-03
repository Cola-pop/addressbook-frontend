import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import AddAddressSection from '../../components/AddAddressSection/AddAddressSection';
import AddressCardSection from '../../components/AddressCardSection/AddressCardSection';
import EmptyAddressesSection from '../../components/EmptyAddressesSection/EmptyAddressesSection';
import Spinner from '../../components/Spinner/Spinner';
import findAllAddressesAPI from '../../api/addresses/findAllAddresses';
import './Home.scss';
import { storeAddresses } from '../../store/slices/addresses';

const Home = () => {
  const dispatch = useDispatch();

  const [addresses, setAddresses] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false);

  const getAddressData = async () => {
    try {
      showSpinnerHandler();
      const addressesData = await findAllAddressesAPI();
      setAddresses(addressesData.data.foundAddresses);

      dispatch(storeAddresses(addressesData.data.foundAddresses));
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
      {addresses.length === 0 ? (
        <EmptyAddressesSection />
      ) : (
        <AddressCardSection
          addresses={addresses}
          updateData={getAddressData}
          showSpinnerHandler={showSpinnerHandler}
          hideSpinnerHandler={hideSpinnerHandler}
        />
      )}

      <Spinner show={showSpinner} />
    </div>
  );
};

export default Home;
