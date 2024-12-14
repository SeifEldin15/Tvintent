<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/includes/posts.css">

    <title>Document</title>
</head>
<body>
<?php

    if( empty(session_id()) && !headers_sent()){
        session_start();
    }
    require_once('connect.php');
    
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $imageData = $row['picture'];
                echo '
                <div class="blog-post-includes">
                    <img src="./assets/images/'.$row["picture"].'" alt="" class="post-img-includes">
                    <div class="post-title-includes">
                        <p class="post-title-p-includes" >'.$row["title"].'</p>
                        <a href="blog/post/'.$row['id'].'/'.$row["title"].'" class="read-more-btn">Read More</a>
                        
                    </div>
                </div> '; } 
            }
                $conn->close();
    ?>
</body>
</html>