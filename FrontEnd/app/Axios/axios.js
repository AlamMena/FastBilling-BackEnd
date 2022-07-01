import axios from "axios";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../Auth/AuthContext";
import useAuth from "../Auth/useAuth";
import auth from "../Firebase/FirebaseAppConfig";

const getToken = () => {
  let response;

  return response;
};
export default function useAxios() {
  const  user  = useContext(AuthContext);

  const axiosInstance = axios.create({
    baseURL: "http://localhost:8080/",
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  });
  return { axiosInstance };
}
