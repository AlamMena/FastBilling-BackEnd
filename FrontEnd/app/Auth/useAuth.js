import React, { useContext, useState } from "react";
import AuthContext from "./AuthContext";
import { app } from "../Firebase/FirebaseAppConfig";
import { signInWithEmailAndPassword, getAuth } from "@firebase/auth";
import { useRouter } from "next/router";

export default function useAuth() {
  const [user, setUser] = useState();
  const value = useContext(AuthContext);
  const auth = getAuth(app);

  const router = useRouter();

  const Login = async (data) => {
    try {
      // data from form
      const { email, password } = data;
      // login in firebase
      const response = await signInWithEmailAndPassword(auth, email, password);

      // distructing stsToken manager
      const { accessToken, refreshToken, expirationTime } =
        response.user.stsTokenManager;

      const token = { accessToken, refreshToken, expirationTime };

      setUser(token);

      localStorage.setItem("token", JSON.stringify(token));
    } catch (error) {
      console.log("login error");
      console.log(error);
    }
  };

  const LogOut = () => {
    console.log("hello");
    localStorage.removeItem("token");
    router.reload("/Login");
  };
  return { Login, LogOut, user };
}
