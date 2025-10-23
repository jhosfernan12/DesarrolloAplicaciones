<?php
session_start();

$ALLOWED_EXT = ['pdf','txt','md','doc','docx','xls','xlsx','csv','png','jpg','jpeg','gif','zip'];
$MAX = 5*1024*1024;
$specs = ["Estadistica","DesarrolloWeb","Testing","DevOps","Otros"];
$base = __DIR__.'/uploads';

if(!is_dir($base)) mkdir($base,0755,true);

function redirectMsg($msg)
{
    $_SESSION['msg'] = $msg;
    header('Location: index.php');
    exit;
}

if($_SERVER['REQUEST_METHOD']!=='POST') redirectMsg('Método no permitido.');
if(!isset($_FILES['file'])||!isset($_POST['specialty'])) redirectMsg('Faltan datos.');

$spec=$_POST['specialty'];
if(!in_array($spec,$specs)) redirectMsg('Especialidad invalida.');

$f=$_FILES['file'];
if($f['error']!==0) redirectMsg('Error de subida: '.$f['error']);
if($f['size']>$MAX) redirectMsg('El archivo excede el tamaño maximo permitido (5 MB).');

$ext=strtolower(pathinfo($f['name'],PATHINFO_EXTENSION));
if(!in_array($ext,$ALLOWED_EXT))
    redirectMsg('Tipo de archivo no permitido. Extensiones validas: '.implode(', ',$ALLOWED_EXT));

$clean=preg_replace('/[^A-Za-z0-9_\-\.]/','_',basename($f['name']));
$name=date('Ymd_His')."_".$clean;
$dest="$base/$spec/$name";

if(!move_uploaded_file($f['tmp_name'],$dest))
    redirectMsg('Error al guardar el archivo.');

redirectMsg('Archivo subido correctamente a '.$spec.'.');
