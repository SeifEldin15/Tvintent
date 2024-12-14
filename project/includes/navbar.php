
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/includes/navbar.css">
    <title>Document</title>
</head>
<body><div class="navoverlay" id="overlay"></div>

<div class="custom-navigation-bar">
    <a href="home"> <img src="assets/images/Multimedia Tv Podcast Play Service Logo.svg" alt="" class="custom-navigation-bar-logo"> </a>
    <ul class="custom-navigation-bar-list">
        <li><a href="home" class="custom-navigation-bar-link">Home</a></li>
        <li><a href="portfolio" class="custom-navigation-bar-link">Portfolio</a></li>
        <li><a href="blog" class="custom-navigation-bar-link">Blog</a></li>
        <li><a class="custom-navigation-bar-link"  onclick="navigateAndScroll()">Services</a></li>
        <li><a href="about" class="custom-navigation-bar-link">About us</a></li>
    </ul>
    <div href="" class="navbar-btns">
    <a href="contact" class="custom-navigation-bar-btn custom-navigation-bar-contact-btn">Contact</a>
    <a href="support" class="custom-navigation-bar-btn custom-navigation-bar-support-btn">Support</a>
    </div>
    <a class="custom-navigation-bar-toggler" id="toggleButton"><i class="fa-solid fa-bars"></i></a>
    <ul class="custom-navigation-bar-list-small" id="navbar-list-small">
    <i class="fa fa-times" aria-hidden="true"></i>
        <li><a href="home" class="custom-navigation-bar-link">Home</a></li>
        <li><a href="portfolio" class="custom-navigation-bar-link">Portfolio</a></li>
        <li><a href="blog" class="custom-navigation-bar-link">Blog</a></li>
        <li><a class="custom-navigation-bar-link" onclick="navigateAndScroll()" >Services</a></li>
        <li><a href="about" class="custom-navigation-bar-link">About us</a></li>
        <li><a href="contact" class="custom-navigation-bar-btn-small custom-navigation-bar-contact-btn">Contact</a></li>
        <li class="last-list-li"><a href="support" class="custom-navigation-bar-btn-small  custom-navigation-bar-support-btn">Support</a></li>
    </ul>
</div>
<script src="js/navbar.js"></script>
</body>