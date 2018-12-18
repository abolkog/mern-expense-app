import axios from 'axios';

export const apiSaveExpense = expense => {
    return axios.post('/api/v1/expense', expense);
}

export const apiFetchExpense = () => {
    return axios.get('/api/v1/expense');
}