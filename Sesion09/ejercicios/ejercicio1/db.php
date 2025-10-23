<?php
$host = "localhost";
$user = "root";
$pass = "";
$dbname = "viajes_espaciales";

// Conectar sin seleccionar DB (por si no existe aún)
$conn = new mysqli($host, $user, $pass);
if ($conn->connect_error) {
  die("Error de conexión: " . $conn->connect_error);
}

// Crear base de datos si no existe
$conn->query("CREATE DATABASE IF NOT EXISTS $dbname CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci");
$conn->select_db($dbname);

// Crear tabla usuarios si no existe
$conn->query("
CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  correo VARCHAR(100) NOT NULL UNIQUE,
  contrasena VARCHAR(255) NOT NULL,
  fecha_nacimiento DATE NOT NULL
)
");

?>
