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
<div class="body-container" id="post-container">

<?php
    $limit = 7;
    $offset = 0; 
    $sql = "SELECT * FROM posts ORDER BY id DESC LIMIT $limit OFFSET $offset";
    include "includes/posts.php"; ?>

<!-- <div class="ajax-load text-center" style="display:none">
    <p><img src="http://demo.itsolutionstuff.com/plugin/loader.gif">Loading More post</p>
</div> -->


<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
var offset = <?php echo $offset + $limit; ?>;

$(window).scroll(function() {
    if ($(window).scrollTop() == $(document).height() - $(window).height()) {
        $('.ajax-load').show();
        $.ajax({
            url: 'load_posts.php',
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

