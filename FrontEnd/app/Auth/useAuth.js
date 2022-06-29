import React, { useContext, useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import auth, { app } from "../Firebase/FirebaseAppConfig";
import { signInWithEmailAndPassword, getAuth } from "@firebase/auth";
import { useRouter } from "next/router";

export default function useAuth() {
  const [user, setUser] = useState();
  const value = useContext(AuthContext);

  const router = useRouter();

  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      setUser(user);
    })
  })

  const Login = async (data) => {
    try {
      // data from form
      const { email, password } = data;
      // login in firebase
      const response = await signInWithEmailAndPassword(auth, email, password);

      // distructing stsToken manager
      auth.onAuthStateChanged(function (user) {
        if (user) {
          setUser(user);
        }
      })

    } catch (error) {
      console.log(error);
    }
  };


  const LogOut = () => {
    console.log("hello");
    localStorage.removeItem("token");
    router.reload("/Login");
  };
  return { Login, LogOut, user, setUser };
}
