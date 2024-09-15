import Callback from "./Callback";

export default function AppleCallback () {
    return (
        <Callback provider="apple" redirectUri="http://localhost:3000"/>
    );
}