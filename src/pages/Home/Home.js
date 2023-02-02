import React, { useEffect, useState } from 'react';

import AddAddressSection from '../../components/AddAddressSection/AddAddressSection';
import AddressCardSection from '../../components/AddressCardSection/AddressCardSection';
import findAllAddressesAPI from '../../api/addresses/findAllAddresses';
import './Home.scss';

const Home = (props) => {
  const [addresses, setAddresses] = useState([]);

  const getAddressData = async () => {
    try {
      const addressesData = await findAllAddressesAPI();
      setAddresses(addressesData.data.foundAddresses);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAddressData();
  }, []);

  return (
    <div className='HomeContainer'>
      <AddAddressSection updateData={getAddressData} />
      <AddressCardSection addresses={addresses} updateData={getAddressData} />
    </div>
  );
};

export default Home;
