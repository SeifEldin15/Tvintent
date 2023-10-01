<?php 
use PHPMailer\PHPMailer\PHPMailer;

require_once 'phpmailer/Exception.php';
require_once 'phpmailer/PHPMailer.php';
require_once 'phpmailer/SMTP.php';

// Google reCAPTCHA API key configuration 
$siteKey     = '6LfGkGcoAAAAAOCGwz31aje6Hs5tBWvFLwXm1bqc'; 
$secretKey     = '6LfGkGcoAAAAADNrLcILUIX3rZnbOcUIwtCT279g'; 

$mail = new PHPMailer(true);

$alert = '';
 
// If the form is submitted 
if(isset($_POST['submit'])){ 
    $postData = $_POST; 
    $Fname = trim($_POST['Fname']); 
    $Sname = trim($_POST['Sname']); 
    $email = trim($_POST['email']); 
    $CompanyName = trim($_POST['CompanyName']); 
    $Phone = trim($_POST['Phone']); 
    $subject = trim($_POST['subject']); 
    $message = trim($_POST['message']); 
     
    // Validate form fields 
    if(empty($Fname)){ 
        $valErr .= 'Please enter your first name.<br/>'; 
    } 
    if(empty($Sname)){ 
        $valErr .= 'Please enter your second name.<br/>'; 
    } 
    if(empty($email) || filter_var($email, FILTER_VALIDATE_EMAIL) === false){ 
        $valErr .= 'Please enter a valid email.<br/>'; 
    } 
    if(empty($subject)){ 
        $valErr .= 'Please enter Message Title.<br/>'; 
    } 
    if(empty($CompanyName)){ 
        $valErr .= 'Please enter Company Name.<br/>'; 
    } 
    if(empty($message)){ 
        $valErr .= 'Please enter your message.<br/>'; 
    } 
     
    if(empty($valErr)){ 
         
        // Validate reCAPTCHA box 
        if(isset($_POST['g-recaptcha-response']) && !empty($_POST['g-recaptcha-response'])){ 
 
            // Verify the reCAPTCHA response 
            $verifyResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$secretKey.'&response='.$_POST['g-recaptcha-response']); 
             
            // Decode json data 
            $responseData = json_decode($verifyResponse); 
             
            // If reCAPTCHA response is valid 
            if($responseData->success){ 
                try{
                    // Send email notification to the site admin 
                    $mail->isSMTP();
                    $mail->Host = 'smtp.gmail.com';
                    $mail->SMTPAuth = true;
                    $mail->Username = 'yousefmyiu@gmail.com'; // Gmail address which you want to use as SMTP server
                    $mail->Password = 'hyjt vefq jdxs ineb'; // Gmail address Password
                    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
                    $mail->Port = '587';

                    $mail->setFrom('yousefmyiu@gmail.com'); // Gmail address which you used as SMTP server
                    $mail->addAddress('yousefmyou@gmail.com'); // Email address where you want to receive emails (you can use any of your gmail address including the gmail address which you used as SMTP server)

                    $mail->isHTML(true);
                    $mail->Subject = 'Message Received (Contact Page)';
                    $mail->Body ="
                        <h2>Contact Request Details</h2> 
                        <p><b>Name: </b>".$Fname.$Sname."</p> 
                        <p><b>Email: </b>".$email."</p> 
                        <p><b>Company Name: </b>".$CompanyName."</p> 
                        <p><b>Phone: </b>".$Phone."</p> 
                        <p><b>Subject: </b>".$subject."</p> 
                        <p><b>Message: </b>".$message."</p> 
                    "; 
                    $mail->send();
                    $alert = '<div class="alert-success">
                    <span> Thank you! Your contact request has submitted successfully, we will get back to you soon..</span>
                    </div>';
                    $status = 'success'; 
                    $postData = ''; 

                } catch (Exception $e){
                    $alert = '<div class="alert-error">
                                <span>'.$e->getMessage().'</span>
                                </div>';
                    }
            }else{ 
                $alert = 'Robot verification failed, please try again.'; 
            } 
        }else{ 
            $alert = 'Please check on the reCAPTCHA box.'; 
        } 
    }else{ 
        $alert = '<p>Please fill all the mandatory fields:</p>'.trim($valErr, '<br/>'); 
    } 
}
