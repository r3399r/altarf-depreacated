import { me } from 'src/api/lambda';

export const getMe = async () => {
  try {
    me();
    // dispatch()
  } catch (e) {
    throw e;
  }
};
