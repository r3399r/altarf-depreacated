import { ssm } from 'src/api/lambda';
import { setParameters } from 'src/redux/parameterSlice';
import { dispatch, getState } from 'src/redux/store';

export const initParameters = async () => {
  const state = getState();
  if (state.parameter.ready) return;

  const res = await ssm(['ENVR', 'ALTARF_LOGIN_ID', 'ALTARF_LOGIN_SECRET']);
  dispatch(
    setParameters({
      envr: res.ENVR,
      lineLoginId: res.ALTARF_LOGIN_ID,
      lineLoginSecret: res.ALTARF_LOGIN_SECRET,
    }),
  );
};
