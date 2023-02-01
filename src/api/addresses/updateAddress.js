import fetchAPI from '../index';

const updateAddressAPI = async (id, newData) => {
  return fetchAPI('PUT', `address/${id}`, newData);
};

export default updateAddressAPI;
