import axios from 'axios';

export const BASE_URL = 'https://68ujip3xe1.execute-api.ap-northeast-1.amazonaws.com/dev/api';

export const ssm = async (name: string[]) => {
  const params = { name: name.join() };
  const res = await axios.get(`${BASE_URL}/ssm?${new URLSearchParams(params)}`);

  return res.data;
};

export const me = async () => {
  const accessToken: string | null = localStorage.getItem('access_token');

  return await axios.get(`${BASE_URL}/me`, {
    headers: {
      'x-api-line': accessToken,
    },
  });
};
