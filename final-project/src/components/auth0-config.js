import createAuth0Client from "@auth0/auth0-spa-js";

const config = {
  domain: "YOUR_AUTH0_DOMAIN",
  client_id: "YOUR_CLIENT_ID",
  redirect_uri: window.location.origin
};

export const initializeAuth0 = async () => {
  const auth0 = await createAuth0Client(config);
  return auth0;
};