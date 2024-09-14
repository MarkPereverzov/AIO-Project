'use server';
import { Callback } from './callback';
import { CallbackProviderProps } from './types';

export const GoogleCallback = async ({searchParams}: CallbackProviderProps) => {
  const redirectUri =  process.env.GOOGLE_REDIRECT_URI!;
  const provider = 'google';
  await Callback({ searchParams, provider ,redirectUri});
}