import { AUTH_ATTEMPTING, AUTH_SUCCESS, AUTH_FAILED } from '../actions/types';

const INITIAL_STATE = {
  attempting: false,
  isAuth: false,
  profile: {},
  error: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_ATTEMPTING:
      return { ...state, attempting: true, isAuth: false, error: null };
    case AUTH_SUCCESS:
      return { ...state, attempting: false, isAuth: true, error: null };
    case AUTH_FAILED:
      return {
        ...state,
        attempting: false,
        isAuth: false,
        error: action.payload
      };
    default:
      return state;
  }
};
