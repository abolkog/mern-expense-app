import axios from 'axios';

export const apiSaveExpense = expense => {
  return axios.post('/api/v1/expense', expense);
};

export const apiFetchExpense = month => {
  const prefix = '/api/v1/expense';
  const url = month ? `${prefix}/${month}` : prefix;
  return axios.get(url);
};
