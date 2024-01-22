import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';

const initValues = {
  user: '',
  token: '',
};

export const AuthReducer = createSlice({
  initialState: initValues,
  name: 'Auth',
  reducers: {
    checkSession(state, action) {
      console.log('check session');
      state.token = action.payload;
    },
    login(state, action) {
      state.user = action.payload;
    },
    signup(state, action) {
      state.user = action.payload;
    },
    logoutAuth(state, action) {
      return {
        ...state,
        token: null,
      };
    },
  },
});
export function getToken(state, action) {
  return async function (dispatch, state) {
    const token = await AsyncStorage.getItem('token');

    dispatch({type: 'Auth/checkSession', payload: token});
  };
}
export default AuthReducer.reducer;
export const {login, signup, logoutAuth} = AuthReducer.actions;
