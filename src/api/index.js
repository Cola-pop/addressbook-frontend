import axios from 'axios';
import { BASE_URL } from '../constants/constants';

const fetchAPI = async (method, endpoint, body, headers) => {
  try {
    const response = await axios.request({
      url: `${BASE_URL}/${endpoint}`,
      data: body,
      method: method,
      headers: headers,
    });

    return response;
  } catch (error) {
    console.info('API ERROR: ', {
      request: method + ' ' + endpoint,
      statusMessage: error?.message,
      errorMessage: error?.response?.data?.message,
    });
    return null;
  }
};

export default fetchAPI;
