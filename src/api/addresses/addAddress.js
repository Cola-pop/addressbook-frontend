import fetchAPI from '../index';

const addAddressAPI = async (addressData) => {
  return fetchAPI('POST', `address`, addressData);
};

export default addAddressAPI;
