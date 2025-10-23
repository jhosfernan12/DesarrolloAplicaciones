<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $nombre = $_POST['nombre'];
  $correo = $_POST['correo'];
  $contrasena = $_POST['contrasena'];
  $fecha = $_POST['fecha_nacimiento'];
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Confirmar Registro</title>
  <link rel="stylesheet" href="estilos.css">
</head>
<body>
  <div class="container">
    <div class="card vertical-form">
      <h2> Confirmación de Datos</h2>
      <div class="preview-box">
        <p><b>Nombre:</b> <?= htmlspecialchars($nombre) ?></p>
        <p><b>Correo:</b> <?= htmlspecialchars($correo) ?></p>
        <p><b>Fecha de nacimiento:</b> <?= htmlspecialchars($fecha) ?></p>
      </div>
      <form action="guardar.php" method="POST">
        <input type="hidden" name="nombre" value="<?= htmlspecialchars($nombre) ?>">
        <input type="hidden" name="correo" value="<?= htmlspecialchars($correo) ?>">
        <input type="hidden" name="contrasena" value="<?= htmlspecialchars($contrasena) ?>">
        <input type="hidden" name="fecha_nacimiento" value="<?= htmlspecialchars($fecha) ?>">
        <button class="btn" type="submit">Confirmar y Registrar</button>
      </form>
    </div>
  </div>
</body>
</html>
