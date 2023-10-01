<?php

$searchQuery = $_POST['search'];

$sql = "SELECT * FROM posts WHERE title LIKE '%$searchQuery%' ORDER BY id DESC LIMIT 9 OFFSET $offset";

include "includes/posts.php";

?>