<?php
session_start();
require_once('db.php');
if(isset($_POST) & !empty($_POST)){
 $email = mysqli_real_escape_string($conn, $_POST['email']);
 $password = md5($_POST['password']);

 $sql = "SELECT * FROM `admin` WHERE email='$email' AND password='$password'";
 $result = mysqli_query($conn, $sql);
 $count = mysqli_num_rows($result);

 if($count == 1){
  $_SESSION['email'] = $email;
 }else{

  $fmsg = "<div class='fmsg fmg'> An unauthorized failed login attempt was detected </div>";

  
 }
}
if(isset($_SESSION['email'])){
 $smsg = "<h4 class='smsg'>successful entry</h4>";

 echo "
 <meta HTTP-EQUIV='REFRESH' content='5; url=/admin/'/>";
}
?>
