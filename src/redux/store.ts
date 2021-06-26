import { configureStore, PayloadAction } from '@reduxjs/toolkit';
import authReducer, { AuthState } from './authSlice';

let store: any;

export type RootState = {
  auth: AuthState;
};

export const configStore = () => {
  store = configureStore({
    reducer: {
      auth: authReducer,
    },
  });

  return store;
};

export const getState = () => store.getState();

export const dispatch = <T>(action: PayloadAction<T>) => store.dispatch(action);
