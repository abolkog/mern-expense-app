import axios from 'axios';

export const apiSaveExpense = expense => {
  return axios.post('/api/v1/expense', expense);
};

export const apiFetchExpense = url => {
  return axios.get(url);
};
