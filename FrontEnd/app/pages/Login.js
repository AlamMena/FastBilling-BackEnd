import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { app, firebaseConfig } from "../Firebase/FirebaseAppConfig";
import { async } from "@firebase/util";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  const auth = getAuth(app);

  let updateToken = async () => {
    let response = await fetch();
  };

  const handleLogin = async (data) => {
    try {
      console.log(data);
      const { email, password } = data;
      const response = signInWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (error) {}

    // .then((userCredential) => {
    //   // Signed in
    //   const user = userCredential.user;
    //   // ...
    // })
    // .catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   console.log(errorMessage);
    // });
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
