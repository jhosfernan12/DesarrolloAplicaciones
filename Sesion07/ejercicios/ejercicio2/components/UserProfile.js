import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import userImg from "../assets/user.jpeg";

const UserProfile = () => {
  const { isAuthenticated, user, login, logout } = useContext(UserContext);

  const handleLogin = () => {
    login({
      name: "Belen Torres",
      email: "belentorresz@gmail.com",
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="login-container">
        <img src={userImg} alt="Usuario" className="profile-image" />
        <div className="login-content">
          <h2>Bienvenida</h2>
          <p>Inicia sesión para continuar</p>
          <button onClick={handleLogin}>Iniciar Sesión</button>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <img src={userImg} alt="Usuario" className="profile-image" />
      <div className="profile-content">
        <h2>Hola, {user.name}</h2>
        <p>{user.email}</p>
        <button onClick={logout}>Cerrar Sesión</button>
      </div>
    </div>
  );
};

export default UserProfile;
