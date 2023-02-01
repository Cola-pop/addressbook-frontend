import fetchAPI from '../index';

const findAllAddressesAPI = async () => {
  return fetchAPI('GET', 'address', {}, {});
};

export default findAllAddressesAPI;
