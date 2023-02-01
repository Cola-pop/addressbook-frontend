import fetchAPI from '../index';

const deleteAddressAPI = async (id) => {
  return fetchAPI('DELETE', `address/${id}`);
};

export default deleteAddressAPI;
