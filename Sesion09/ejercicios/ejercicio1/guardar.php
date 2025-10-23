<?php
include("db.php");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $nombre = $_POST['nombre'];
  $correo = $_POST['correo'];
  $contrasena = password_hash($_POST['contrasena'], PASSWORD_DEFAULT);
  $fecha = $_POST['fecha_nacimiento'];

  $sql = "INSERT INTO usuarios (nombre, correo, contrasena, fecha_nacimiento) VALUES (?, ?, ?, ?)";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param("ssss", $nombre, $correo, $contrasena, $fecha);

  if ($stmt->execute()) {
    echo "<script>alert('Registro exitoso =)'); window.location='login.php';</script>";
  } else {
    echo "Error: " . $conn->error;
  }
}
?>
