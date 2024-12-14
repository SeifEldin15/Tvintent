<?php 
// Include form submission script 
include_once 'includes/emailSupport.php'; 
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/support.css">
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
    <link rel="icon" href="" type="image/x-icon">

    <title>Support</title>
    
</head>
<body>
    <?php include "includes/navbar.php"?>
    <div class="container">
           <div class="left-side">
           <p class="left-side-header1">Support</p>
            <p class="left-side-header2">Having </p>
            <p class="left-side-header22"> Issues?</p>

            <p class="left-side-paragraph">Lorem ipsum dolor sit ame oremque distinctio earum beatae nihil, consequatur quae? Iste est nesciunt consequatur exercitationem voluptate, impedit quia a.</p>
        </div>
    <div class="contact-container">

        <form action="" method="post" class="cnt-form">
            <div class="contact-container-content">
                <?php echo $alert; ?>            
                <div class="left">
                <p class="contact-container-content-header">How can we help you?</p>

                    <div class="input-container">
                    <input type="text" name="Fname" id="" class="info-inputs" placeholder="First Name"  value="<?php echo !empty($postData['Fname'])?$postData['Fname']:''; ?>" required="">
                    <input type="text" name="Sname" id="Sname" class="info-inputs" placeholder="Second Name" value="<?php echo !empty($postData['Sname'])?$postData['Sname']:''; ?>" required="">

                </div>
                </div>

                <div class="right">
                <div class="input-container">
                <input type="email" name="email" id="" class="info-inputs" placeholder="Email" value="<?php echo !empty($postData['email'])?$postData['email']:''; ?>" required="">
                    <input type="text" name="Phone" id="" class="info-inputs" placeholder="Phone (optional) " value="<?php echo !empty($postData['Phone'])?$postData['Phone']:''; ?>">
                </div>
                <div class="input-container">

                <input type="text" name="CompanyName" id="" class="info-inputs" placeholder="Company Name (optional)" value="<?php echo !empty($postData['CompanyName'])?$postData['CompanyName']:''; ?>" >

                <input type="text" name="Issue" id="" class="info-inputs" placeholder="Issue" value="<?php echo !empty($postData['Issue'])?$postData['Issue']:''; ?>" required="">
                </div>

                </div>
              <div class="other">
              <input type="text" name="message" id=""   class="comment-input"  placeholder="Description" value="<?php echo !empty($postData['Message'])?$postData['Message']:''; ?>" required="">

            <div class="form-input">
            <!-- Google reCAPTCHA box -->
            <div class="g-recaptcha" data-sitekey="<?php echo $siteKey; ?>"></div>
                        </div>
              <button type="submit" name="submit" id=""   class="btn"  value="Submit">Submit</button>

            </div>

            </div>
            

        

        </form>

    </div>
</div>
<?php include "includes/footer.php"; ?>
<script src="js/darkmode.js"></script>

</body>
</html>