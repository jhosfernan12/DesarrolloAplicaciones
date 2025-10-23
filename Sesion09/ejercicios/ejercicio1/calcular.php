<?php
include("db.php");

$mensajeError = "";
$usuario = null;
$edad = null;
$precioFinal = null;
$mensaje = "";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $correo = $_POST['correo'];
  $contrasena = $_POST['contrasena'];
  $precioBase = $_POST['precio'];

  $sql = "SELECT * FROM usuarios WHERE correo = ?";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param("s", $correo);
  $stmt->execute();
  $resultado = $stmt->get_result();

  if ($usuario = $resultado->fetch_assoc()) {
    if (password_verify($contrasena, $usuario['contrasena'])) {
      $fechaNac = new DateTime($usuario['fecha_nacimiento']);
      $hoy = new DateTime();
      $edad = $hoy->diff($fechaNac)->y;

      if ($edad >= 18) {
        $precioFinal = $precioBase;
        $mensaje = "Pasajero adulto — Precio completo.";
      } elseif ($edad >= 2) {
        $precioFinal = $precioBase * 0.75;
        $mensaje = "Pasajero menor — 75% del precio.";
      } else {
        $precioFinal = 0;
        $mensaje = "Infante — ¡Vuelo gratuito!";
      }
    } else {
      $mensajeError = "Contraseña incorrecta. Por favor, inténtalo de nuevo.";
    }
  } else {
    $mensajeError = "Usuario no encontrado. Verifica tus datos o regístrate.";
  }
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Resultado del Cálculo</title>
  <link rel="stylesheet" href="estilos.css">
</head>
<body>
  <div class="container">
    <div class="card vertical-form">
      <?php if ($mensajeError): ?>
        <h2> Error</h2>
        <div class="preview-box">
          <p style="color:#ff8a8a; font-weight:600; text-align:center;">
            <?= htmlspecialchars($mensajeError) ?>
          </p>
        </div>
        <a href="login.php" class="btn">Volver al inicio de sesión</a>
      <?php else: ?>
        <h2> Precio Final del Pasaje</h2>
        <div class="preview-box">
          <p><b>Nombre:</b> <?= htmlspecialchars($usuario['nombre']) ?></p>
          <p><b>Edad:</b> <?= $edad ?> años</p>
          <p><b><?= $mensaje ?></b></p>
          <p><b>Total a pagar:</b> S/. <?= number_format($precioFinal, 2) ?></p>
        </div>
        <a href="login.php" class="btn">Volver</a>
      <?php endif; ?>
    </div>
  </div>
</body>
</html>
