<?php include("db.php"); ?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Inicio de Sesión</title>
  <link rel="stylesheet" href="estilos.css">
</head>
<body>
  <div class="container">
    <div class="card vertical-form">
      <h2>Inicia Sesión</h2>
      <form action="calcular.php" method="POST">
        <label>Correo electrónico:</label>
        <input type="email" name="correo" required>

        <label>Contraseña:</label>
        <input type="password" name="contrasena" required>

        <label>Precio base del pasaje :</label>
        <input type="number" name="precio" required>

        <button class="btn" type="submit">Calcular Precio</button>
        <p style="margin-top:10px;"><a href="index.php" class="link">¿No tienes cuenta? Regístrate</a></p>
      </form>
    </div>
  </div>
</body>
</html>
