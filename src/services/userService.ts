import axios from 'axios';
import { me } from 'src/api/lambda';
import { getUserProfile } from 'src/api/line';
import { setMe } from 'src/redux/authSlice';
import { dispatch } from 'src/redux/store';

export const getMe = async () => {
  try {
    const res = await me();
    dispatch(setMe(res.data));
  } catch (e) {
    throw e;
  }
};

export const registerUser = async (data: any) => {
  try {
    const accessToken: string | null = localStorage.getItem('access_token');

    const lineUserProfile = await getUserProfile(accessToken!);

    const res = await axios.post('/api/users', {
      lineUserId: lineUserProfile.userId,
      name: data.name,
      role: data.role,
    });

    dispatch(setMe(res.data));
  } catch (e) {
    throw e;
  }
};
