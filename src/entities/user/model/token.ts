'use server';
import { cookies } from 'next/headers'

export const getToken = async (): Promise<string | undefined> => {
  const cookieStore = cookies();
  return cookieStore.get('accessToken')?.value;
};

export const setToken = async (token: string) => {
  const cookieStore = cookies();
  const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // использовать только по HTTPS в продакшене
    maxAge: 3600,
  };
  cookieStore.set('accessToken', token, cookieOptions);
};

export const removeToken = async () => {
  const cookieStore = cookies();
  cookieStore.delete('accessToken');
};