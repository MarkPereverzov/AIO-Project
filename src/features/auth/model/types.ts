export interface FetchTokenParams {
  code: string | null;
  provider: string;
  redirectUri: string;
  setAccessToken: (accessToken: string) => void;
}

export interface CallbackProps {
  searchParams: {
    code: string;
  },
  provider: string;
  redirectUri: string;
}

export interface CallbackProviderProps {
  searchParams: {
    code: string;
  };
}