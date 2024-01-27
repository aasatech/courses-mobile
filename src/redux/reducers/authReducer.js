import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';
import ACTION_TYPES from '../actions/Authentication/type';
import {RegisterUser, SignInUser} from '../../actions/auth/Authentication';

const initValues = {
  user: '',
  token: '',
};

const authReducer = (state = initValues, action) => {
  switch (action.type) {
    case ACTION_TYPES.login:
      return {
        ...state,
        token: action.payload,
        isError: {
          errorMessage: '',
          error: false,
          errorLogin: '',
          errorRegister: '',
        },
      };

    case ACTION_TYPES.signUp:
      return {
        ...state,
        token: action.payload,
        isLoading: false,
        isError: {
          errorMessage: '',
          error: false,
          errorLogin: '',
          errorRegister: '',
        },
      };
    case ACTION_TYPES.checkSession:
      return state;
    case ACTION_TYPES.loadingToggle:
      return {
        ...state,
        isLoading: action.payload,
      };
    case ACTION_TYPES.clearMessageError:
      return {
        ...state,
        isError: {
          errorMessage: '',
          error: false,
          errorLogin: '',
          errorRegister: '',
        },
      };
    case ACTION_TYPES.errorToggle:
      return {
        ...state,
        isError: {
          error: true,
          errorMessage: action.payload,
        },
      };
    default:
      return initValues;
  }
};

export const loginUser = params => {
  return {
    type: ACTION_TYPES.login,
    payload: {params},
  };
};
export const signUpUser = params => {
  return {
    type: ACTION_TYPES.signUp,
    payload: params,
  };
};
export const authorizingUser = (params, isRegister = false) => {
  return async function (dispatch, state) {
    try {
      let data;

      if (isRegister) {
        data = await RegisterUser(params);

        if (data?.error) {
          throw new Error(data.error);
        }
        dispatch({
          type: ACTION_TYPES.signUp,
          payload: data.token,
        });
      } else {
        data = await SignInUser(params);

        if (data?.error) {
          throw new Error(data.error);
        }

        dispatch({
          type: ACTION_TYPES.login,
          payload: data?.token,
        });
      }
    } catch (error) {
      throw new Error(error);
    }
  };
};

export const checkSession = params => {
  return {
    type: ACTION_TYPES.checkSession,
    payload: {params},
  };
};
export const loadingActionToggle = params => {
  return {
    type: ACTION_TYPES.loadingToggle,
    payload: params,
  };
};
export const errorActionToggle = params => {
  return {
    type: ACTION_TYPES.errorToggle,
    payload: params,
  };
};

export const resetState = params => {
  return {
    type: ACTION_TYPES.reset,
  };
};
export const resetErrorMessage = params => {
  return {
    type: ACTION_TYPES.clearMessageError,
  };
};
export default authReducer;
