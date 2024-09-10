import createClient, { type Middleware } from "openapi-fetch";
import { backendBaseUrl } from "../config";
import type { paths } from "./v1";

// const authMiddleware: Middleware = {
//     async onRequest({ request }) {
//         const {accessToken} = useToken();
//         request.headers.set("Authorization", `Bearer ${accessToken}`);
//             return request;
//         },
// };

const client = createClient<paths>({ baseUrl: backendBaseUrl });
//client.use(authMiddleware);
export const { GET, POST, PUT, DELETE } = client;