<?php

$offset = $_POST['offset'];

$sql = "SELECT * FROM posts ORDER BY id DESC LIMIT 9 OFFSET $offset";

include "includes/posts.php"; 

?>
