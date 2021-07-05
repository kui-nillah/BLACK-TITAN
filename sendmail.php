<?php  
use PHPMailer\PHPMailer\PHPMailer;

	require_once "PHPMailer/PHPMailer.php";
	require_once "PHPMailer/SMTP.php";
	require_once "PHPMailer/Exception.php";

	$mail= new PHPMailer(true);

	$alert = '';
    
    if (isset($_POST['send'])){
	$name=$_POST['name'];
	$email=$_POST['email'];
	$message=$_POST['message'];
	$subject=$_POST['subject'];

    
    try{
    	$mail->isSMTP();
	$mail->Host = "smtp.gmail.com";
	$mail->SMTPAuth = true;
	$mail->Username = 'godwinnillah@gmail.com';
	$mail->Password = 'Gnn130799';
	$mail->SMTPsecure = PHPMailer::ENCRYPTION_STARTTLS;
	$mail->port = '587';

	$mail->setFrom('godwinnillah@gmail.com');
	$mail->addAddress('godwinnillah@gmail.com');

	$mail->isHTML(true);
	$mail->Subject = $subject;
	$bodyParagraphs = ["Name: {$name}", "Email: {$email}", "Message:", nl2br($message)];
    $body = join('<br />', $bodyParagraphs);
    $mail->Body = $body;


	$mail->send();
	$alert = '<div class="alert-success">
		        <span>Message sent! Thank you for contacting us.</span>
	           </div>';
	           header("location:sent.php");
      }
      catch(Exception $e){
    	$alert = '<div class="alert-error">
		            <span>'.$e->getMessage().'</span>
	              </div>';
	              header("location:fail.php");
}
}
?>