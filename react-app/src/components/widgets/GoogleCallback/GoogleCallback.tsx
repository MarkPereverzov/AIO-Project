import { open } from "inspector";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Constants from "../../../constants/secrets";


export default function GoogleCallback() {
    const [accessToken, setAccessToken] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();


    const fetchAccesstoken = async () => {     
        const url = 'http://localhost:3001/oauth/token/';
        
        console.log(searchParams.get('code'));

        if(searchParams.get('code')) {

        const body = {
            code: searchParams.get('code'),
            client_id: Constants.client_id,
            client_secret: Constants.client_secret,
            redirect_uri: 'http://localhost:3000/google/callback',
            grant_type: 'authorization_code',
            provider: 'google'
        }
        console.log(body);
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        setAccessToken((await res.json()).access_token);
        }
    }

    useEffect(() => {
        fetchAccesstoken();
    },[]);

    console.log(accessToken);

    const handleClick = () => {
        navigate("/");
    }

    return (
        <div>
            <button onClick={handleClick} type="button" />
        </div>
    );
}