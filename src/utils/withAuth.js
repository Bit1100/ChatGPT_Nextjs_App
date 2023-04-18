import getUserAPI from "../api/auth/getUser.js";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PageLoading from "../components/Utils/Loading";

export const withAuth = (WrappedComponent) => {
  const AuthenticatedComponent = (props) => {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(-1);

    useEffect(() => {
      const tmpGetUser = getUserAPI();
      setIsLoggedIn(tmpGetUser.status);
    }, []);

    useEffect(() => {
      if (isLoggedIn == 0) {
        router.push("/login");
      }
    }, [isLoggedIn]);

    if (isLoggedIn == 1) {
      return <WrappedComponent {...props} />;
    }

    return <PageLoading />;
  };

  AuthenticatedComponent.displayName = `withAuth(${
    WrappedComponent.displayName || WrappedComponent.name || "Component"
  })`;

  return AuthenticatedComponent;
};
