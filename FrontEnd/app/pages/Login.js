import React from "react";
import getAuth from "firebase/auth";

export default function Login() {
  const { register, handleSubmit } = useForm();

  return (
    <div className="login">
      <form>
        <div className="login__">Iniciar sesion</div>
        <div className="input__username" type="text">
          <input></input>
        </div>
        <div className="input__password" type="password">
          <input></input>
        </div>
      </form>
    </div>
  );
}
