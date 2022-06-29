import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { app, firebaseConfig } from "../Firebase/FirebaseAppConfig";
import { async } from "@firebase/util";
import useAuth from "../Auth/useAuth";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  const { Login } = useAuth();
  const handleLogin = async (data) => {
    const response = await Login(data);
  };

  return (
    <div className="login">
      <p>{data}</p>
      {/* Log In user form  */}
      <form onSubmit={handleSubmit((data) => handleLogin(data))}>
        <div className="login__">Iniciar sesion</div>
        <div className="input__useremail" type="text" name="email">
          <input {...register("email")} placeholder="E-mail"></input>
        </div>
        <div className="input__password" type="password" name="password">
          <input {...register("password")} placeholder="Contraseña"></input>
        </div>
        <div className="input__submit">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}
