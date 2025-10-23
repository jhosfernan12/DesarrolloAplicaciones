<?php
$base=__DIR__.'/uploads';
$allowed=["Estadistica","DesarrolloWeb","Testing","DevOps","Otros"];

if($_SERVER['REQUEST_METHOD']!=='POST'){echo "Método no permitido";exit;}
if(!isset($_POST['spec'],$_POST['file'])){echo "Datos incompletos";exit;}

$spec=$_POST['spec'];
$file=basename($_POST['file']);

if(!in_array($spec,$allowed)){echo "Especialidad inválida";exit;}

$path=realpath("$base/$spec/$file");
if(!$path||strpos($path,realpath("$base/$spec"))!==0){echo "Archivo inválido";exit;}

if(!file_exists($path)){echo "No encontrado";exit;}

if(unlink($path)){echo "Archivo eliminado correctamente";}
else{echo "Error al eliminar";}
