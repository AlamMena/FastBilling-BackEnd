import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { app } from "../Firebase/FirebaseAppConfig";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  const auth = getAuth(app);

  const handleLogin = (data) => {
    const { email, password } = data;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className="login">
      <p>{data}</p>
      <form onSubmit={handleSubmit((data) => handleLogin(data))}>
        <div className="login__">Iniciar sesion</div>
        <div className="input__useremail" type="text">
          <input {...register("email")} placeholder="E-mail"></input>
        </div>
        <div className="input__password" type="password">
          <input {...register("password")} placeholder="Contraseña"></input>
        </div>
        <div className="input__submit">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}
