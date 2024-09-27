import { User } from '@/entities/user';
import { GET } from '@/shared/api';
import { throwAnyErrors } from '@/shared/lib';

export const getUserInfo = async (): Promise<User | null> => {
  try {
    return await throwAnyErrors(GET('/user/info'));
  } catch (error) {
    console.error(error);
    return null;
  }
};