import { EXPENSE_SAVED } from './types';
import { addErrorMessage, clearErrorMessages } from './error_actions';

import { apiSaveExpense } from '../api/expense';

export const saveExpense = expense => {
  return async dispatch => {
    try {
      dispatch(clearErrorMessages());
      await apiSaveExpense(expense);
      dispatch({ type: EXPENSE_SAVED });
    } catch (e) {
      dispatch(addErrorMessage(e));
    }
  };
};
