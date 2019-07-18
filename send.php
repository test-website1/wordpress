<?php
$to = "dima130603@gmail.com";
$subject = "Получено сообщение!" . "\r\n";

if($_POST["email"]) {
	$message ="Имя: " . $_POST["name"] . "\r\n" .  "Телефон: " . $_POST["phone"] . "\r\n" . "Email: " . $_POST["email"] . "\r\n" . "Сообщение: " . $_POST["textarea"] . "\r\n";
} else {
	$message ="Имя: " . $_POST["name"] . "\r\n" .  "Телефон: " . $_POST["phone"] . "\r\n" . "Email: не указано". "\r\n" . "Сообщение: " . $_POST["textarea"] . "\r\n";
}

$headers = "From: " . $_POST["email"] . "\r\n";
$headers .= "Reply-to: " . $_POST["email"] . "\r\n";
$headers .= "Content-type: text/html\r\n";

mail($to, $subject, $message, $headers);
?>
