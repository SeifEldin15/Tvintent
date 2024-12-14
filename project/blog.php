<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/blog.css">
    <link rel="icon" href="" type="image/x-icon">
    <title>Blog</title>
</head>
<body>
<?php include "includes/navbar.php";?>
<div class="body-container" id="post-container">

<?php
    $limit = 9;
    $offset = 0; 
    $sql = "SELECT * FROM posts ORDER BY id DESC LIMIT $limit OFFSET $offset";
    include "includes/posts.php"; ?>
<?php include "includes/footer.php"; ?> 

<script src="js/darkmode.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

<script>
var offset = <?php echo $offset + $limit; ?>;

$(window).scroll(function() {
    if ($(window).scrollTop() >= $(document).height() - $(window).height() - 100) {
        $('.ajax-load').show();
        $.ajax({
            url: 'load_posts',
            type: 'post',
            data: {offset: offset},
            success: function(response) {
                $('#post-container').append(response);
                offset += <?php echo $limit; ?>; 
            }
        });
    }
});
</script>


