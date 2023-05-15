import createAuth0Client from "@auth0/auth0-spa-js";
import { AUTH0_CONFIG } from "./auth0-config";

let auth0Client;

export async function getAuth0Client() {
  if (!auth0Client) {
    auth0Client = await createAuth0Client(AUTH0_CONFIG);
  }
  return auth0Client;
}
