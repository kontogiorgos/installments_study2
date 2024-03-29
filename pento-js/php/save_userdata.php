<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
require 'Exception.php';
require 'PHPMailer.php';
require 'SMTP.php';

header("Content-Type: application/json");
$data = file_get_contents("php://input");

if (!empty($data)) {
	$fname = mktime() . ".json";
	$file = fopen("../resources/data_collection/" .$fname, 'w');
	fwrite($file, $data);
	fclose($file);

	$mail = new PHPMailer(true);
	$mail->isSMTP();
	$mail->SMTPDebug = 2; // 0 = off (for production use) - 1 = client messages - 2 = client and server messages
	$mail->Host = "smtp.gmail.com"; // use $mail->Host = gethostbyname('smtp.gmail.com'); // if your network does not support SMTP over IPv6
	$mail->Port = 587; // TLS only
	$mail->SMTPSecure = 'tls'; // ssl is depracated
	$mail->SMTPAuth = true;
	$mail->Username = "pentomino.data@gmail.com"; //dummy account
	$mail->Password = "pqvjwyyehfeapcle"; //dummy password
	$mail->setFrom("pentomino.data@gmail.com", "Pentomino Data");
	$mail->addAddress("pentomino.data@gmail.com", "Dimosthenis Kontogiorgos");
	$mail->Subject = 'Pentomino Data: Study Completed';
	$mail->msgHTML($data);
	$mail->AltBody = 'HTML messaging not supported';
	// $mail->addAttachment('images/phpmailer_mini.png'); //Attach an image file

	if(!$mail->send()){
	    echo "Mailer Error: " . $mail->ErrorInfo;
	}else{
	    echo "Message sent!";
	}
}
?>
