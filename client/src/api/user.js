import axios from 'axios';

export const apiLogin = request_data => {
  return axios.post('/api/v1/auth', request_data);
};
