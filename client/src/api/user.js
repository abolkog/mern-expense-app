import axios from 'axios';

export const apiLogin = request_data => {
  return axios.post('/api/v1/auth', request_data);
};

export const apitFetchProfile = () => {
  return axios.get('/api/v1/me');
};

export const apiSignUp = request_data => {
  return axios.post('/api/v1/register', request_data);
};
