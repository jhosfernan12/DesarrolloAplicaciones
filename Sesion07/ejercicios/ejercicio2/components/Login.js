import React from "react";
import { useUser } from "../context/UserContext";
import userImage from "../assets/user.jpeg";

const Login = () => {
  const { login } = useUser();

  const handleLogin = () => {
    login({ name: "Belen Torres", email: "belentorresz@gmail.com" });
  };

  return (
    <div className="login-container">
      <img src={userImage} alt="Usuario" className="login-image" />
      <div className="login-content">
        <h2>Bienvenida</h2>
        <button className="login-btn" onClick={handleLogin}>
          Iniciar Sesión
        </button>
      </div>
    </div>
  );
};

export default Login;
