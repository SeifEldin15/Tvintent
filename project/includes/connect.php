<?php
$servername = "DB";
$username = "root";
$password = "root";
$database = "TVintent" ;

$conn = new mysqli($servername, $username, $password , $database );

 if(!$conn){
  die("Database Connection Failed" . mysqli_error($conn));
 }
 
$select_db = mysqli_select_db($conn, $database );
if(!$select_db){
 die("Database Selection Failed" . mysqli_error($conn));
}

?>