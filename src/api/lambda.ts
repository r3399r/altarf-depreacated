import axios from 'axios';

const baseUrl = 'https://68ujip3xe1.execute-api.ap-northeast-1.amazonaws.com/dev/api';

export const ssm = async (name: string[]) => {
  const params = { name: name.join() };
  const res = await axios.get(`${baseUrl}/ssm?${new URLSearchParams(params)}`);

  return res.data;
};

export const me = async () => {
  const accessToken: string | null = localStorage.getItem('access_token');

  const res = await axios.get(`${baseUrl}/me`, {
    headers: {
      'x-api-line': accessToken,
    },
  });

  return res.data;
};
