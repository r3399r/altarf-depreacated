export type LineToken = {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  token_type: 'Bearer';
};

export type LineLoginParams = {
  code: string;
  redirectUri: string;
  clientId: string;
  clientSecret: string;
  grantType: string;
};

export type LineRefreshParams = {
  clientId: string;
  clientSecret: string;
  grantType: string;
  refreshToken: string;
};
