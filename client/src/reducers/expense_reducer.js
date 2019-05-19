import {
  EXPENSE_SAVED,
  RESET_SAVED_FLAG,
  FETCHED_FAILED,
  FETCHED_SUCCESS,
  FETCHING_EXPENSE,
  EXPENSE_UPDATED
} from '../actions/types';

const INITIAL_STATE = {
  updated: false,
  saved: false,
  fetching: false,
  expense: [],
  statistics: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCHING_EXPENSE:
      return { ...state, fetching: true };
    case FETCHED_SUCCESS:
      const { expense, statistics } = action.payload;
      return { ...state, fetching: false, expense, statistics };
    case FETCHED_FAILED:
      return { ...state, fetching: false };
    case EXPENSE_SAVED:
      return { ...state, saved: true };
    case EXPENSE_UPDATED:
      return { ...state, updated: true };
    case RESET_SAVED_FLAG:
      return { ...state, saved: false, updated: false };
    default:
      return state;
  }
};
