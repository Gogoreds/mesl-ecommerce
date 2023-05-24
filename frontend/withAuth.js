import { useRouter } from "next/router";
import { useEffect } from "react";
import { getAuth0Client } from "./auth0-client";

export default function withAuth(Component) {
  return function AuthenticatedComponent(props) {
    const router = useRouter();

    useEffect(() => {
      async function checkAuthentication() {
        const auth0 = await getAuth0Client();
        const isAuthenticated = await auth0.isAuthenticated();

        if (!isAuthenticated) {
          router.push("/login");
        }
      }

      checkAuthentication();
    }, [router]);

    return <Component {...props} />;
  };
}
