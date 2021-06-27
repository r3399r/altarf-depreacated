import axios from 'axios';
import { LineLoginParams, LineRefreshParams, LineToken } from 'src/model/Line';

const LINE_TOKEN_URL = 'https://api.line.me/oauth2/v2.1/token';

export const lineLogin = async (params: LineLoginParams): Promise<LineToken> => {
  const data = new URLSearchParams();
  data.append('code', params.code);
  data.append('redirect_uri', params.redirectUri);
  data.append('client_id', params.clientId);
  data.append('client_secret', params.clientSecret);
  data.append('grant_type', params.grantType);

  const res = await axios.post(LINE_TOKEN_URL, data, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  });

  return res.data;
};

export const lineRefresh = async (params: LineRefreshParams): Promise<LineToken> => {
  const data = new URLSearchParams();
  data.append('client_id', params.clientId);
  data.append('client_secret', params.clientSecret);
  data.append('grant_type', params.grantType);
  data.append('refresh_token', params.refreshToken);

  const res = await axios.post(LINE_TOKEN_URL, data, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  });

  return res.data;
};
