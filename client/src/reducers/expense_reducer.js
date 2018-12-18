import { EXPENSE_SAVED, RESET_SAVED_FLAG } from '../actions/types';

const INITIAL_STATE = {
  saved: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EXPENSE_SAVED:
      return { ...state, saved: true };
    case RESET_SAVED_FLAG:
      return { ...state, saved: false };
    default:
      return state;
  }
};
