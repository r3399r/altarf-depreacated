import { lineLogin, lineRefresh } from 'src/api/line';
import { setLoginStatus } from 'src/redux/authSlice';
import { dispatch } from 'src/redux/store';

const validateState = (state: string) => {
  if (Date.now() - Number(state) < 10 * 60 * 1000) return;
  throw new Error('wrong state');
};

export const loginByCode = async (code: string, state: string) => {
  try {
    validateState(state);

    const token = await lineLogin({
      code,
      redirectUri: 'http://localhost:3002',
      clientId: '1656147451',
      clientSecret: 'e636c266d9c4ba1f5ad8e7996d2c5e4e',
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
    const refreshedToken = await lineRefresh({
      clientId: '1656147451',
      clientSecret: 'e636c266d9c4ba1f5ad8e7996d2c5e4e',
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

export const getLink = () => {
  const url = 'https://access.line.me/oauth2/v2.1/authorize';
  const params = {
    response_type: 'code',
    client_id: '1656147451',
    redirect_uri: 'http://localhost:3002',
    state: `${Date.now()}`,
    scope: 'profile',
  };

  return `${url}?${new URLSearchParams(params)}`;
};
