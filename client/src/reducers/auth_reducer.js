import {
  AUTH_SUCCESS,
  AUTH_FAILED,
  USER_LOGGED_OUT,
  PROFILE_FEATCHED
} from '../actions/types';

const INITIAL_STATE = {
  isAuth: false,
  profile: {},
  error: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return { ...state, isAuth: true, error: null };
    case AUTH_FAILED:
      return {
        ...state,
        isAuth: false,
        error: action.payload
      };
    case USER_LOGGED_OUT:
      return { ...state, isAuth: false, profile: {} };
    case PROFILE_FEATCHED:
      return { ...state, profile: action.payload };
    default:
      return state;
  }
};
