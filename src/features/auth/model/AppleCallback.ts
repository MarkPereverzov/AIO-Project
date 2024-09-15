import { Callback } from './callback';
import { CallbackProviderProps } from './types';

export const AppleCallback = async ({searchParams}: CallbackProviderProps) => {
  const redirectUri =  process.env.APPLE_REDIRECT_URI!;
  const provider = 'apple';
  await Callback({ searchParams, provider,redirectUri});
}