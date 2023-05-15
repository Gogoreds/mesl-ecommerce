import { Auth0Provider } from "@auth0/auth0-react";
import { AUTH0_CONFIG } from "../../utils/auth0-config";
import { useRouter } from "next/router";
import { AppProps } from "next/app";
import "../styles/tailwind.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const onRedirectCallback = (appState: any) => {
    router.push(appState?.returnTo || "/dashboard");
  };

  return (
    <Auth0Provider
      domain={AUTH0_CONFIG.domain}
      clientId={AUTH0_CONFIG.clientId}
      redirectUri={AUTH0_CONFIG.redirectUri}
      onRedirectCallback={onRedirectCallback}
    >
      <Component {...pageProps} />
    </Auth0Provider>
  );
}

export default MyApp;
