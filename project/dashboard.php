<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/panel.css">
    <title>Document</title>
</head>
<body>
    <form class="post-form" action="process_upload.php" method="POST" enctype="multipart/form-data">
         <input type="file" name="post-picture" id="post-picture" class="info-inputs">
        <div id="inputContainer">
             <input type="text" name="title" class="info-inputs" placeholder="Post Title">
             <input type="text" name="Category" class="info-inputs" placeholder="Category">
             <input type="text" name="paragraph-header" class="info-inputs" placeholder="Paragraph Header">
            <input type="text" name="post-paragraph" class="post-content" placeholder="Post Paragraph">
        </div>
        <button type="button" id="addInput">Add More</button>
        <button type="submit" class="submit">Submit</button>
    </form>
    <script src="scripts/dashboard.js">
  </script>
</body>
</html>
