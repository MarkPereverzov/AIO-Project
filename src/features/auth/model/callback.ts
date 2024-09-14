'use server';
import { setToken } from '@/entities/user/model/token';
import { FetchTokenParams, CallbackProps } from './types';

export const fetchAccesstoken = async ({
  code,
  provider,
  redirectUri,
}: Omit<FetchTokenParams, 'setAccessToken'>): Promise<string | null> => {
  const url = 'http://localhost:3001/oauth/token/';
  
  const body = {
    code,
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    redirect_uri: redirectUri,
    grant_type: 'authorization_code',
    provider
  };
  
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      throw new Error(`Error fetching access token: ${res.statusText}`);
    }

    const { access_token } = await res.json();

    return access_token;
  } catch (error) {
    console.error('Failed to fetch access token:', error);
    return null;
  }
};

export const Callback = async ({ searchParams, provider ,redirectUri }: CallbackProps) => {
  const { code } = searchParams;

  const accessToken = await fetchAccesstoken({
    code,
    provider,
    redirectUri,
  });
  
  console.log(code, provider, redirectUri);

  if (!accessToken) {
    console.log("Error fetching access token");
  } else {
    await setToken(accessToken);
  }
  return null;
}