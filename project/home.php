

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/homestyle.css">
    <title>Document</title>
</head>
<body>

<?php include "includes/navbar.php";?>

<div class="body-cotanier">
   <div class="first-row">
    <div class="left-pragraph-container">
        <div class="left-paragraph-header">
            <p class="ahdadad">Future of </p>
            <p class="ahdadad1"> &nbsp TV</p>
        </div>
        <p class="left-pragraph">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur nobis accusamus minus blanditiis maxime necessitatibus  
        </p>
    </div>
            <img src="assets/icons/man-watching-show-his-tv.jpg" class="first-row-img" alt="">

   </div>
   <div class="second-row">
        <div class="second-row-paragraph-left">
            <p class="second-row-paragraph-left-header">
                The Advantages of Working With us
            </p>
            <ul>
            <li class="bullet-points">Lorem ipsum dolor sit, nsectetur  </li>
            <li class="bullet-points">Lorem ipsum dolor sit, amet consectetur  </li>
            <li class="bullet-points">Lorem ipsum dolor sit, amet   </li>
            <li class="bullet-points">Lorem ipsum dolor sit, amet consectetur  </li>
            <li class="bullet-points">Lorem ipsum doconsectetur  </li>
            </ul>
        </div>
        <div class="second-row-paragraph-right-container">
        <h2>distribute and monetize channels</h2>
        <p class="second-row-paragraph-right">Lorem ipsum dolor sit, amet Consequatur nobis accusamus minus blanditiis maxime necessitatibus   consectetur adipisicing elit. Consequatur nobis accusamus minus blanditiis maxime necessitatibus</p>
        </div>
    </div>

    <div class="third-row">
        <p class="explore">explore</p>
        <div class="third-row-content">
        <?php
            $sql = "SELECT * FROM posts ORDER BY id ASC LIMIT 3";
        include "includes/posts.php";
        
        ?>

        </div>
    </div>

</div>
</body>
</html>

