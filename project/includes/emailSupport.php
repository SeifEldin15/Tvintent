<?php 
use PHPMailer\PHPMailer\PHPMailer;

require_once 'phpmailer/Exception.php';
require_once 'phpmailer/PHPMailer.php';
require_once 'phpmailer/SMTP.php';

// Google reCAPTCHA API key configuration 
$siteKey     = '6Lf1QIIoAAAAALkuhZXWaJmZn2ZLOk_dKPlsmfXD'; 
$secretKey     = '6Lf1QIIoAAAAAEcfOegUGp-txOvJ2wmy_KkzRbLw'; 

$mail = new PHPMailer(true);

$alert = '';
$valErr= null;
// If the form is submitted 
if(isset($_POST['submit'])){ 
    $postData = $_POST; 
    $Fname = trim($_POST['Fname']); 
    $Sname = trim($_POST['Sname']); 
    $email = trim($_POST['email']); 
    $CompanyName = trim($_POST['CompanyName']); 
    $Phone = trim($_POST['Phone']); 
    $Issue = trim($_POST['Issue']); 
    $message = trim($_POST['message']); 
     
    // Validate form fields 
    if(empty($Fname)){ 
        $valErr .= 'Please enter your first name.<br/>'; 
    } 
    if(empty($Sname)){ 
        $valErr .= 'Please enter your second name.<br/>'; 
    } 
    if(empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)){ 
        $valErr .= 'Please enter a valid email.<br/>'; 
    } 
    if(empty($Issue)){ 
        $valErr .= 'Please enter Issue.<br/>'; 
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
              
                    // Send email notification to the site admin 
                    $mail->isSMTP();
                    $mail->Host = 'smtp.gmail.com';
                    $mail->SMTPAuth = true;
                    $mail->Username = 'tvintent1@gmail.com'; // Gmail address which you want to use as SMTP server
                    $mail->Password = 'nvqm vjin mmpn iryf'; // Gmail address Password
                    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
                    $mail->Port = '587';

                    $mail->setFrom('tvintent1@gmail.com'); // Gmail address which you used as SMTP server
                    $mail->addAddress('tvintent1@gmail.com'); // Email address where you want to receive emails (you can use any of your gmail address including the gmail address which you used as SMTP server)

                    $mail->isHTML(true);
                    $mail->Subject = 'Message Received (Contact Page)';
                    $mail->Body = '<p>Support Request</p>

                    <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
                        <tbody>
                            <tr>
                                <td align="center" style="padding: 20px 0;">
                    
                                    <h1>Support Request</h1>
                    
                                    <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
                                        <tbody>
                                            <tr>
                                                <td style="padding: 10px 0;"><strong>Name:</strong></td>
                                                <td style="padding: 10px 0;">'.$Fname.' '.$Sname.'</td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 10px 0;"><strong>Email:</strong></td>
                                                <td style="padding: 10px 0;">'.$email.'</td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 10px 0;"><strong>Phone:</strong></td>
                                                <td style="padding: 10px 0;">'.$Phone.'</td>
                                            </tr>
                                            <tr>
                                                    <td style="padding: 10px 0;"><strong>Company Name:</strong></td>
                                                    <td style="padding: 10px 0;">'.$CompanyName.'</td>
                                             </tr>
                                            <tr>
                                                <td style="padding: 10px 0;"><strong>Issue:</strong></td>
                                                <td style="padding: 10px 10px;">&'.$Issue.'</td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 10px 0;"><strong>Description:</strong></td>
                                                <td style="padding: 10px 10px;">'.$message.'</td>
                                            </tr>
                                        </tbody>
                                    </table>
                    
                                    <p style="padding: 20px 0;">Our support team will get back to you shortly.</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    ';
                    $mail->send();
                    $alert = '<div class="alert-success">
                    <span> Thank you! Your support request has been submitted successfully, we will get back to you soon..</span>
                    </div>';
                    $status = 'success'; 
                    $postData = ''; 

                
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
