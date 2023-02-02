import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import AddAddressSection from '../../components/AddAddressSection/AddAddressSection';
import AddressCardSection from '../../components/AddressCardSection/AddressCardSection';
import EmptyAddressesSection from '../../components/EmptyAddressesSection/EmptyAddressesSection';
import Spinner from '../../components/Spinner/Spinner';
import findAllAddressesAPI from '../../api/addresses/findAllAddresses';
import './Home.scss';
import * as actionTypes from '../../store/actions';

const Home = (props) => {
  const { onUpdateAddresses } = props;

  const [addresses, setAddresses] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false);

  const getAddressData = async () => {
    try {
      showSpinnerHandler();
      const addressesData = await findAllAddressesAPI();
      setAddresses(addressesData.data.foundAddresses);
      onUpdateAddresses(addressesData.data.foundAddresses);
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

const mapStateToProps = (state) => {
  return {
    addresses: state.adr.addresses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateAddresses: (addressesData) =>
      dispatch({ type: actionTypes.ADDRESSES, addressesData: addressesData }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
