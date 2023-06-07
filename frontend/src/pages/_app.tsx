import { useRouter } from "next/router";
import { AppProps } from "next/app";
import "../styles/tailwind.scss";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const onRedirectCallback = (appState: any) => {
    router.push(appState?.returnTo || "/dashboard");
  };

  return (
    <Layout>
      <Component {...pageProps} onRedirectCallback={onRedirectCallback} />
    </Layout>
  );
}

export default MyApp;
