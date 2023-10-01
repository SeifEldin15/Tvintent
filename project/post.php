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
            <p class="post-title">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. L
            </p>
            <img src="assets/icons/man-watching-show-his-tv.jpg" alt="" class="post-picture">
            <h2 class="paragraph-title">
                Lorem ipsum dolor sit amet consectetu
            </h2>
            <p class="post-paragraph">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam tempore odit iusto, beatae quaerat
                tempora earum necessitatibus! Ad officiis quisquam deleniti totam praesentium temporibus iusto ea
                voluptatibus, itaque assumenda? Sed.
            </p>
            <h2 class="paragraph-title">
                Lorem ipsum dolor sit amet consectetu
            </h2>
            <p class="post-paragraph">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam tempore odit iusto, beatae quaerat
                tempora earum necessitatibus! Ad officiis quisquam deleniti totam praesentium temporibus iusto ea
                voluptatibus, itaque assumenda? Sed.
            </p>

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