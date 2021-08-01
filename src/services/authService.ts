import { lineLogin, lineRefresh } from 'src/api/line';
import { setLoginStatus } from 'src/redux/authSlice';
import { dispatch, getState } from 'src/redux/store';
import { initParameters } from './parameterService';

const REDIRECT_URI = `${window.location.origin}/login`;

const validateState = (lineState: string) => {
  if (Date.now() - Number(lineState) < 10 * 60 * 1000) return;
  throw new Error('wrong state');
};

export const loginByCode = async (code: string, lineState: string) => {
  try {
    validateState(lineState);

    await initParameters();
    const { parameter } = getState();

    const token = await lineLogin({
      code,
      redirectUri: REDIRECT_URI,
      clientId: parameter.lineLoginId as string,
      clientSecret: parameter.lineLoginSecret as string,
      grantType: 'authorization_code',
    });

    localStorage.setItem('access_token', token.access_token);
    localStorage.setItem('refresh_token', token.refresh_token);

    dispatch(setLoginStatus(true));
  } catch {
    dispatch(setLoginStatus(false));
    throw new Error('login by code failed');
  }
};

export const loginBySavedToken = async () => {
  const accessToken: string | null = localStorage.getItem('access_token');
  const refreshToken: string | null = localStorage.getItem('refresh_token');

  if (accessToken === null || refreshToken === null) return;

  dispatch(setLoginStatus(true));

  try {
    const { parameter } = getState();

    const refreshedToken = await lineRefresh({
      clientId: parameter.lineLoginId as string,
      clientSecret: parameter.lineLoginSecret as string,
      grantType: 'refresh_token',
      refreshToken,
    });

    localStorage.setItem('access_token', refreshedToken.access_token);
    localStorage.setItem('refresh_token', refreshedToken.refresh_token);
  } catch {
    dispatch(setLoginStatus(false));
    throw new Error('Token Refresh Failed');
  }
};

export const getLink = async () => {
  await initParameters();
  const { parameter } = getState();

  const url = 'https://access.line.me/oauth2/v2.1/authorize';
  const params = {
    response_type: 'code',
    clientId: parameter.lineLoginId as string,
    redirect_uri: REDIRECT_URI,
    state: `${Date.now()}`,
    scope: 'profile',
  };

  return `${url}?${new URLSearchParams(params)}`;
};
