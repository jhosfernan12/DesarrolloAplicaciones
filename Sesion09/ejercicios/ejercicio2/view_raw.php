<?php
$base=__DIR__.'/uploads';
$allowed=["Estadistica","DesarrolloWeb","Testing","DevOps","Otros"];

if(!isset($_GET['spec'],$_GET['file']))
{
    http_response_code(400);exit('Parametros faltantes');
}
$spec=$_GET['spec'];
$file=basename($_GET['file']);

if(!in_array($spec,$allowed))
{
    http_response_code(403);exit('No permitido');
}
$path=realpath("$base/$spec/$file");

if(!$path||strpos($path,realpath("$base/$spec"))!==0||!file_exists($path))
{
  http_response_code(404);exit('No encontrado');
}

$ext=strtolower(pathinfo($path,PATHINFO_EXTENSION));
$mime=mime_content_type($path);
header("Content-Type: $mime");

if(in_array($ext,['txt','md','csv']))
    {
  echo "<pre>".htmlspecialchars(file_get_contents($path))."</pre>";
}
elseif(in_array($ext,['png','jpg','jpeg','gif']))
    {
  header("Content-Type: image/$ext");
  readfile($path);
}
elseif($ext==='pdf')
{
  header("Content-Disposition: inline; filename=\"$file\"");
  readfile($path);
}
else
{
  echo "<div style='color:white;padding:10px'>Vista previa no disponible para .$ext</div>";
}
