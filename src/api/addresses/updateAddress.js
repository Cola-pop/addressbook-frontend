import fetchAPI from '../index';

const updateAddressAPI = async (id, newAddressData) => {
  return fetchAPI('PUT', `address/${id}`, newAddressData);
};

export default updateAddressAPI;
