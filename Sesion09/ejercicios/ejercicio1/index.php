<?php include("db.php"); ?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Registro de Astronautas</title>
  <link rel="stylesheet" href="estilos.css">
</head>
<body>
  <div class="container">
    <div class="card vertical-form">
      <h2>Registro de Vuelo Espacial</h2>
      <form action="confirmar.php" method="POST">
        <label>Nombre completo:</label>
        <input type="text" name="nombre" required>

        <label>Correo electrónico:</label>
        <input type="email" name="correo" required>

        <label>Contraseña:</label>
        <input type="password" name="contrasena" required>

        <label>Fecha de nacimiento:</label>
        <input type="date" name="fecha_nacimiento" required>

        <button class="btn" type="submit">Continuar</button>
        <p style="margin-top: 10px;">¿Ya tienes cuenta? <a href="login.php" class="link">Iniciar sesión</a></p>
      </form>
    </div>
  </div>
</body>
</html>
