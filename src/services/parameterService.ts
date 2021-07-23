import { ssm } from 'src/api/lambda';
import { setParameters } from 'src/redux/parameterSlice';
import { dispatch, getState } from 'src/redux/store';

export const initParameters = async () => {
  const state = getState();
  if (state.parameter.ready) return;

  const res = await ssm(['ENVR', 'LINE_LOGIN_ID', 'LINE_LOGIN_SECRET']);
  dispatch(
    setParameters({
      envr: res.ENVR,
      lineLoginId: res.LINE_LOGIN_ID,
      lineLoginSecret: res.LINE_LOGIN_SECRET,
    }),
  );
};
