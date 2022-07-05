import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Login from "../pages/Login";
import Loading from "../Components/Loading";
import Index from "../pages/index";
import axios from "axios";
import useAuth from "./useAuth";
import auth from "../Firebase/FirebaseAuth";

export default function PrivateRoute({ children }) {
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  // router
  const { pathname } = useRouter();

  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      setUser(user);
      setLoading(false);
      const x = axios.create({
        baseURL: 'http://localhost:8080/',
        headers: {
          'Authorization': `Bearer ${user.accessToken}`
        }
      })
    })
  }, []);

  if (user) {
    if (pathname === "/Login") {
      return <Index />;
    }
    return children;
  }
  else if (!isLoading && !user) {
    return <Login />;
  }
  return <Loading />;
}
