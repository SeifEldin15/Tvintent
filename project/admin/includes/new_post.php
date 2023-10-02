<?php
    
    ob_start();
    require_once "../../connect.php";

    session_start();


    $email = $_SESSION['email'];

    $picture = $_POST['picture'];
    $title = $_POST['title'];
    $content = $_POST['content'];

  if (isset($_POST["submit"])) {
    // Add task to DB
    $sql = "INSERT INTO posts(title, content, picture)
   VALUES ('$title', '$content', '$picture')";

try {

      $result = mysqli_query($conn, $sql);

      header('Location:../posts.php?posted');

      }

     catch (Exception $e) {
        $e->getMessage();
        echo "Error";
    }
  } 

?> 

