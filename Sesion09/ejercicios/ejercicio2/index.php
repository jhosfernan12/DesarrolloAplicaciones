<?php
session_start();

$specialties = [
    "Estadistica"   => "Estadística",
    "DesarrolloWeb" => "DesarrolloWeb",
    "Testing"       => "Testing",
    "DevOps"        => "DevOps",
    "Otros"         => "Otros"
];

$uploadDir = __DIR__ . '/uploads';
if (!is_dir($uploadDir)) mkdir($uploadDir, 0755, true);

$filesBySpec = [];
foreach ($specialties as $key => $label) 
{
    $dir = "$uploadDir/$key";
    if (!is_dir($dir)) mkdir($dir, 0755, true);
    $files = array_values(array_filter(scandir($dir), fn($f) => !in_array($f, ['.', '..'])));
    $filesBySpec[$key] = $files;
}

$msg = $_SESSION['msg'] ?? null;
unset($_SESSION['msg']);
?>
<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<title>Gestor de Archivos por Especialidad</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<div class="wrap">
  <div class="header">
    <h1>Gestor de archivos clasificados</h1>
  </div>

  <div class="panel">
    <?php if($msg): ?>
      <div class="msg"><?= htmlspecialchars($msg) ?></div>
    <?php endif; ?>
    <form action="upload.php" method="post" enctype="multipart/form-data">
      <select name="specialty" required>
        <?php foreach($specialties as $k=>$v): ?>
          <option value="<?=htmlspecialchars($k)?>"><?=$v?></option>
        <?php endforeach; ?>
      </select>
      <input type="file" name="file" required>
      <button type="submit" class="primary">Subir archivo</button>
    </form>
  </div>

  <div class="layout">
    <div class="panel files-section">
      <?php foreach($filesBySpec as $spec=>$files): ?>
        <div class="spec-card">
          <div class="spec-title">
            <strong><?=$specialties[$spec]?> (<?=count($files)?>)</strong>
          </div>
          <?php if(empty($files)): ?>
            <div class="small">No hay archivos</div>
          <?php else: ?>
            <?php foreach($files as $f): ?>
              <div class="file-item">
                <a onclick="previewFile('<?=htmlspecialchars($spec)?>','<?=htmlspecialchars($f)?>')"><?=htmlspecialchars($f)?></a>
                <button onclick="deleteFile('<?=htmlspecialchars($spec)?>','<?=htmlspecialchars($f)?>')">Eliminar</button>
              </div>
            <?php endforeach; ?>
          <?php endif; ?>
        </div>
      <?php endforeach; ?>
    </div>

    <div class="panel">
      <h2>Vista previa</h2>
      <div id="preview" class="preview">
        <div class="small">Selecciona un archivo para ver su contenido aquí.</div>
      </div>
    </div>
  </div>
</div>

<script>
function previewFile(spec,file)
{
  const prev=document.getElementById('preview');
  prev.innerHTML='<iframe src="view_raw.php?spec='+encodeURIComponent(spec)+'&file='+encodeURIComponent(file)+'"></iframe>';
}

function deleteFile(spec,file)
{
  if(!confirm("¿Seguro que deseas eliminar "+file+"?")) return;
  fetch('delete.php',
  {
    method:'POST',
    headers:{'Content-Type':'application/x-www-form-urlencoded'},
    body:'spec='+encodeURIComponent(spec)+'&file='+encodeURIComponent(file)
  })
  .then(r=>r.text())
  .then(res=>{
    alert(res);
    location.reload();
  })
  .catch(()=>alert('Error al eliminar.'));
}
</script>
</body>
</html>
