import {
  EXPENSE_SAVED,
  RESET_SAVED_FLAG,
  FETCHING_EXPENSE,
  FETCHED_SUCCESS,
  FETCHED_FAILED,
  EXPENSE_UPDATED
} from './types';
import { addErrorMessage, clearErrorMessages } from './error_actions';

import {
  apiSaveExpense,
  apiFetchExpense,
  apiUpdateExpense,
  apiDeleteExpense
} from '../api/expense';

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

export const updateExpense = expense => {
  return async dispatch => {
    try {
      dispatch(clearErrorMessages());
      await apiUpdateExpense(expense);
      dispatch({ type: EXPENSE_UPDATED });
    } catch (e) {
      dispatch(addErrorMessage(e));
    }
  };
};

export const fetchExpense = month => {
  return async dispatch => {
    try {
      dispatch({ type: FETCHING_EXPENSE });
      const { data } = await apiFetchExpense(month);
      dispatch({ type: FETCHED_SUCCESS, payload: data });
    } catch (e) {
      dispatch({ type: FETCHED_FAILED });
      dispatch(addErrorMessage(e));
    }
  };
};

export const deleteExpense = expenseId => {
  return async dispatch => {
    try {
      dispatch(clearErrorMessages());
      await apiDeleteExpense(expenseId);
      dispatch(fetchExpense());
    } catch (e) {
      dispatch(addErrorMessage(e));
    }
  };
};

export const resetSaved = () => ({ type: RESET_SAVED_FLAG });
