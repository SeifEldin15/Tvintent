<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/blog.css">
    <title>Document</title>
</head>
<body>
<?php include "includes/navbar.php";?>
<div class="body-container">

<?php
    $sql = "SELECT * FROM posts ORDER BY id ASC LIMIT 3";
    include "includes/posts.php"; ?>
</div>