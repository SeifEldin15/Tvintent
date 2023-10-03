<?php
    ob_start();

    require_once "db.php";

    if(!isset($_SESSION)) 
    { 
        session_start(); 
    } 
    
    if(!isset($_SESSION['email']) || empty($_SESSION['email'])){

        header("location: login.php");
  
        exit;
      }
    $email = $_SESSION['email'];
    $sql_posts = "SELECT * FROM posts";
    $query_posts = mysqli_query($conn, $sql_posts);

    // $sql_contacts = "SELECT * FROM contacts";
    // $query_contacts = mysqli_query($conn, $sql_contacts);
?> 