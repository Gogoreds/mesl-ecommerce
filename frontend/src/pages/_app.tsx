import { useRouter } from "next/router";
import { AppProps } from "next/app";
import "../styles/tailwind.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const onRedirectCallback = (appState: any) => {
    router.push(appState?.returnTo || "/dashboard");
  };

  return (
    <Component
      {...pageProps}
      onRedirectCallback={onRedirectCallback}
    />
  );
}

export default MyApp;
