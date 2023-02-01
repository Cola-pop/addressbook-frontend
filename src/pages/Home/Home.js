import React, { useEffect, useState } from 'react';

import './Home.scss';
import AddressCardSection from '../../components/AddressCardSection/AddressCardSection';
import findAllAddressesAPI from '../../api/addresses/findAllAddresses';

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
      <AddressCardSection addresses={addresses} updateData={getAddressData} />
    </div>
  );
};

export default Home;
