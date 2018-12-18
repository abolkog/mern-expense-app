import {
  EXPENSE_SAVED,
  RESET_SAVED_FLAG,
  FETCHED_FAILED,
  FETCHED_SUCCESS,
  FETCHING_EXPENSE
} from '../actions/types';

const INITIAL_STATE = {
  saved: false,
  fetching: false,
  expense: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCHING_EXPENSE:
      return { ...state, fetching: true };
    case FETCHED_SUCCESS:
      return { ...state, fetching: false, expense: action.payload };
    case FETCHED_FAILED:
      return { ...state, fetching: false };
    case EXPENSE_SAVED:
      return { ...state, saved: true };
    case RESET_SAVED_FLAG:
      return { ...state, saved: false };
    default:
      return state;
  }
};
