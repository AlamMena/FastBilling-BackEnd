import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Login from "../pages/Login";
import Loading from "../Components/Loading";
import Index from "../pages/index";
import axios from "axios";

export default function PrivateRoute({ children }) {
  const [isLoading, setLoading] = useState(true);
  const [token, setToken] = useState(null);

  // router
  const { pathname } = useRouter();

  useEffect(() => {
    const parsedToken = JSON.parse(localStorage.getItem("token"));
    setToken(parsedToken);
    setLoading(false);
  }, []);

  const refreshToken = async () => {
    const refreshTokenBody = {
      grantType: "refresh_token",
      refreshToken: token.refreshToken,
    };
    const refreshTokenResponse = await axios.post(
      "https://securetoken.googleapis.com/v1/token?key=AIzaSyDwFKPD4xvIbD1huSnbQG44GTXP2h5_kYM",
      refreshTokenBody
    );
    console.log(refreshTokenResponse);
    const { access_token, refresh_token, expires_in } =
      refreshTokenResponse.data;

    localStorage.setItem(
      "token",
      JSON.stringify({
        accessToken: access_token,
        refreshToken: refresh_token,
        expirationTime: expires_in,
      })
    );
  };

  if (token) {
    if (token.expirationTime > Math.floor(Date.now() / 1000)) {
      refreshToken();
    }
    if (pathname === "/Login") {
      return <Index />;
    }
    return children;
  } else if (!isLoading && !token) {
    return <Login />;
  }
  return <Loading />;
}
