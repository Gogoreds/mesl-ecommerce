export const AUTH0_CONFIG = {
  // domain: "dev-s5hdxlv1alfdm4ay.us.auth0.com",
  // clientId: "tBQGZaihGBLtIvx6uXTJ4bmF1ZCRQhWQ",
  domain: process.env.NEXT_PUBLIC_AUTH0_DOMAIN,
  clientId: process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID,
  redirectUri: "http://localhost:3000/dashboard",
  responseType: "token id_token",
  scope: "openid profile email",
};
