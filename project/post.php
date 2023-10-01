<?php 
    require_once('connect.php');
    $id = isset($_GET['id']) ? intval($_GET['id']) : 0;
    $sql = "SELECT * FROM posts WHERE id = $id";
    $result = $conn->query($sql);
    $data = mysqli_fetch_assoc($result); 
    $imageData = $data['picture'];
        ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/post-view.css">
    <title>Document</title>
</head>

<body>
    <?php include "includes/navbar.php"; ?>

    <div class="container">
        <div class="post-body">
        <p class="post-title"><?php echo $data['title']; ?></p>
        <img src="data:image/jpeg;base64,<?php echo base64_encode($imageData ?? '')?>" alt="" class="post-picture">
        <p class="post-paragraph"><?php echo $data['content']; ?></p>

            <!-- ده هيفضل ثابت -->
            <h2 class="contact-p-header">
                reach out to us
            </h2>
            <p class="contact-p">
                reach out to us at <a href="">email$email.com</a>
            </p>
        </div>
        <div class="second-column">
            <div class="Related">
                Related Posts
            </div>
            <div class="related-posts">
                <?php
                $sql = "SELECT * FROM posts ORDER BY id DESC LIMIT 3";
                include "includes/posts.php"?>
            </div>
        </div>
    </div>
</body>

</html>