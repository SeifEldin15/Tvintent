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
?>

    <?php
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $imageData = $row['picture'];
                echo '
                <div class="blog-post">
                    <img src="data:image/jpeg;base64,'.base64_encode($imageData ?? '').'"alt="" class="post-img">
                    <div class="post-title">
                        <p class="post-title-p">'.$row["title"].'</p>
                        <a href="" class="read-more-btn">Read More</a>
                    </div>
                </div> '; } 
            } else {
                    echo "There are no posts";
                }
                $conn->close();
    ?>
</body>
</html>