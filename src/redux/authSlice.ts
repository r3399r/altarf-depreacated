import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type AuthState = {
  isLogin: boolean;
};

const initialState: AuthState = {
  isLogin: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoginStatus: (state: AuthState, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLoginStatus } = authSlice.actions;

export default authSlice.reducer;
