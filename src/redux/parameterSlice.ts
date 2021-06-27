import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ParameterState = Parameters & {
  ready: boolean;
};

type Parameters = {
  envr?: string;
  lineLoginId?: string;
  lineLoginSecret?: string;
};

const initialState: ParameterState = {
  ready: false,
  envr: undefined,
  lineLoginId: undefined,
  lineLoginSecret: undefined,
};

export const parameterSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setParameters: (state: ParameterState, action: PayloadAction<Parameters>) => {
      state.ready = true;
      state.envr = action.payload.envr;
      state.lineLoginId = action.payload.lineLoginId;
      state.lineLoginSecret = action.payload.lineLoginSecret;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setParameters } = parameterSlice.actions;

export default parameterSlice.reducer;
