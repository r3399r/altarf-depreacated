import axios from 'axios';

export const ssm = async (name: string[]) => {
  const params = { name: name.join() };
  const res = await axios.get(`/api/ssm?${new URLSearchParams(params)}`);

  return res.data;
};

export const me = async () => {
  const accessToken: string | null = localStorage.getItem('access_token');

  return await axios.get('/api/me', {
    headers: {
      'x-api-line': accessToken,
    },
  });
};
