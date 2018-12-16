import { EXPENSE_SAVED } from './types';

import { apiSaveExpense } from '../api/expense';

export const saveExpense = expense => {
    return async dispatch => {
        try{
            await apiSaveExpense(expense);
            dispatch({ type: EXPENSE_SAVED });
        }catch(e) {
            console.error(e);
        }
    }
}