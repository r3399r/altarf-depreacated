import { configureStore, EnhancedStore, PayloadAction } from '@reduxjs/toolkit';
import authReducer, { AuthState } from './authSlice';
import parameterReducer, { ParameterState } from './parameterSlice';

let store: EnhancedStore<RootState>;

export type RootState = {
  auth: AuthState;
  parameter: ParameterState;
};

export const configStore = () => {
  store = configureStore({
    reducer: {
      auth: authReducer,
      parameter: parameterReducer,
    },
  });

  return store;
};

export const getState = () => store.getState();

export const dispatch = <T>(action: PayloadAction<T>) => store.dispatch(action);
