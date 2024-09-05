import { open } from "inspector";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useToken } from "../../context";
import Constants from "../../../constants/secrets";

interface FetchTokenParams {
    code: string | null;
    provider: string;
    redirectUri: string;
    setAccessToken: (accessToken: string) => void;
}

const fetchAccesstoken = async ({
    code,
    provider,
    redirectUri,
    setAccessToken
}: FetchTokenParams): Promise<void> =>  {
    const url = 'http://localhost:3001/oauth/token/';
    
    const body = {
        code,
        client_id: Constants.client_id,
        client_secret: Constants.client_secret,
        redirect_uri: redirectUri,
        grant_type: 'authorization_code',
        provider
    }
    
    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        if (!res.ok) {
            throw new Error(`Error fetching access token: ${res.statusText}`);
        }

        const { access_token } = await res.json();
        setAccessToken(access_token);
    } catch (error) {
        console.error('Failed to fetch access token:', error);
    }
}  

interface CallbackProps {
    provider: string;
    redirectUri: string;
}

export default function Callback ({provider,redirectUri }: CallbackProps) {
    const [accessToken, setAccessToken] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const { saveTokens } = useToken();
    const navigate = useNavigate();
    const code = searchParams.get('code');

    useEffect(() => {
        fetchAccesstoken({code, provider, redirectUri, setAccessToken});
    },[code, provider, redirectUri]);

    useEffect(() => {
        if (accessToken) {
            console.log(accessToken);
            saveTokens(accessToken,'');
          navigate('/');
        }
      }, [accessToken, navigate]);

    return (
        <div>
            <h1 style={{zIndex:20}}>{accessToken ? "Token received" : "Waiting for token..."}</h1>
        </div>
    );
}