import {combineReducers, configureStore} from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getDefaultMiddleware} from '@reduxjs/toolkit';
import {courseReducer} from './reducers/courseReducer';

const persistConfig = {
  key: 'auth',
  storage: AsyncStorage,
};
const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, authReducer),
  course: courseReducer,
});

// const rootReducer = combineReducers({
//   auth: authReducer,
//   course: courseReducer,
// });

// export const rootPersistReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistance = persistStore(store);
