// src/auth.js
let isAuthenticated = false;

// Simula una llamada a un API para iniciar sesión
export const login = (callback) => {
  isAuthenticated = true;
  setTimeout(callback, 100); // Simula una espera
};

// Cierra la sesión
export const logout = (callback) => {
  isAuthenticated = false;
  setTimeout(callback, 100);
};

// Revisa el estado de autenticación
export const checkAuth = () => {
  return isAuthenticated;
};
