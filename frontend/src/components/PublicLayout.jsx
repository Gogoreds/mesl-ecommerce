import Head from "next/head";
import PublicLayout from "../components/layouts/CookieBanner";

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Our Privacy Policy</title>
        <meta name="description" content="Website privacy policy page" />
      </Head>

      <PublicLayout>
        <h1 className="font-open text-3xl font-bold">
          Website privacy policy page content
        </h1>
      </PublicLayout>
    </>
  );
};

export default PrivacyPolicy;
