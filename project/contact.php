<?php 
// Include form submission script 
include_once 'sendemail.php'; 
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/contact.css">
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>

    <title>Document</title>
    
</head>
<body>
   
    <div class="contact-container">
        <form action="" method="post" class="cnt-form">
            <div class="contact-container-content">
                <!-- Status message -->
                <?php echo $alert; ?>            
                <div class="left">
                    <input type="text" name="Fname" id="" class="info-inputs" placeholder="First Name"  value="<?php echo !empty($postData['Fname'])?$postData['Fname']:''; ?>" required="">
                    <input type="text" name="email" id="" class="info-inputs" placeholder="Email" value="<?php echo !empty($postData['email'])?$postData['email']:''; ?>" required="">
                    <input type="text" name="CompanyName" id="" class="info-inputs" placeholder="Company Name" value="<?php echo !empty($postData['CompanyName'])?$postData['CompanyName']:''; ?>" required="">
                </div>

                <div class="right">
                    <input type="text" name="Sname" id="Sname" class="info-inputs" placeholder="Second Name" value="<?php echo !empty($postData['Sname'])?$postData['Sname']:''; ?>" required="">
                    <input type="text" name="Phone" id="" class="info-inputs" placeholder="Phone" value="<?php echo !empty($postData['Phone'])?$postData['Phone']:''; ?>" required="">
                    <input type="text" name="subject" id="" class="info-inputs" placeholder="Message Title" value="<?php echo !empty($postData['subject'])?$postData['subject']:''; ?>" required="">
                </div>

            </div>
            
            <input type="text" name="message" id=""   class="comment-input"  placeholder="Message" value="<?php echo !empty($postData['Message'])?$postData['Message']:''; ?>" required="">

            <div class="form-input">
                <!-- Google reCAPTCHA box -->
                <div class="g-recaptcha" data-sitekey="<?php echo $siteKey; ?>"></div>
            </div>

            <input type="submit" name="submit" id=""   class="btn"  value="Submit">
        </form>

    </div>
</body>
</html>