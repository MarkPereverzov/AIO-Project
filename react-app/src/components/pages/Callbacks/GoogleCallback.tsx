import Callback from "./Callback";

export default function GoogleCallback () {
    return (
        <Callback provider="google" redirectUri="http://localhost:3000/google/callback"/>
    );
}