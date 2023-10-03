<?php

 ob_start();
 
 require_once('db.php');
 
 session_start();

 $email = $_SESSION['email'];

if(isset($_POST) & !empty($_POST)){
    $title = $_POST['title'];
    $content = $_POST['editor'];

    $fileTmpPath = $_FILES['picture']['tmp_name'];
    $fileName = $_FILES['picture']['name'];
    $uploadDirectory = '../post-pics/';
    $uniqueFileName = uniqid() . '_' . $fileName;
    $destination = $uploadDirectory . $uniqueFileName;
    move_uploaded_file($fileTmpPath, $destination);

    $sql = "INSERT INTO posts(title, content , picture)
    VALUES (?,?,?)";
    $stmt = $conn->prepare($sql);
    try {
        $stmt->execute([$title, $content ,$destination]);
        header("loction: posts.php");
    }
  
       catch (Exception $e) {
          $e->getMessage();
          echo "Error";
      }



}
