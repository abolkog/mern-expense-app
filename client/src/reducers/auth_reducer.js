import {
  AUTH_SUCCESS,
  AUTH_FAILED,
  USER_LOGGED_OUT,
  PROFILE_FEATCHED,
  SIGNUP_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
  isAuth: false,
  profile: {},
  error: null,
  signedUp: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return { ...state, isAuth: true, error: null };
    case AUTH_FAILED:
      return {
        ...state,
        isAuth: false,
        error: action.payload,
      };
    case USER_LOGGED_OUT:
      return { ...state, isAuth: false, profile: {} };
    case PROFILE_FEATCHED:
      return { ...state, profile: action.payload };
    case SIGNUP_SUCCESS:
      return { ...state, error: null, signedUp: true };
    default:
      return state;
  }
};
