import {
  AUTH_SUCCESS,
  AUTH_FAILED,
  USER_LOGGED_OUT,
  PROFILE_FEATCHED,
  SIGNUP_SUCCESS,
} from './types';
import { apiLogin, apitFetchProfile, apiSignUp } from '../api/user';
import setAuthHeader from '../api/setAuthHeader';

const TOKEN_NAME = 'expense_app_token';

export const signUp = request_data => {
  return async dispatch => {
    try {
      await apiSignUp(request_data);
      dispatch({ type: SIGNUP_SUCCESS });
    } catch (e) {
      const {
        response: { data },
      } = e;
      dispatch(error(data.error));
    }
  };
};

export const signIn = request_data => {
  return async dispatch => {
    try {
      const {
        data: { token },
      } = await apiLogin(request_data);
      setAuthHeader(token);
      dispatch(getUserProfile());
      dispatch(success(token));
    } catch (e) {
      const {
        response: { data },
      } = e;
      dispatch(error(data.error));
    }
  };
};

export const onLodingSignIn = () => {
  return dispatch => {
    try {
      const token = localStorage.getItem(TOKEN_NAME);
      if (token === null || token === 'undefined') {
        return dispatch(error(''));
      }
      setAuthHeader(token);
      dispatch(getUserProfile());
      dispatch(success(token));
    } catch (e) {
      console.error(e);
    }
  };
};

export const getUserProfile = () => {
  return async dispatch => {
    try {
      const {
        data: { user },
      } = await apitFetchProfile();

      dispatch({ type: PROFILE_FEATCHED, payload: user });
    } catch (e) {
      console.error(e);
    }
  };
};

export const logUserOut = () => {
  localStorage.clear();
  setAuthHeader(null);
  return { type: USER_LOGGED_OUT };
};

const success = token => {
  localStorage.setItem(TOKEN_NAME, token);
  return { type: AUTH_SUCCESS };
};
const error = error => {
  return { type: AUTH_FAILED, payload: error };
};
