import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Me } from 'src/model/User';

export type AuthState = {
  isLogin: boolean;
  me: Me | null;
};

const initialState: AuthState = {
  isLogin: false,
  me: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoginStatus: (state: AuthState, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
    setMe: (state: AuthState, action: PayloadAction<any>) => {
      state.me = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoginStatus, setMe } = authSlice.actions;

export default authSlice.reducer;
