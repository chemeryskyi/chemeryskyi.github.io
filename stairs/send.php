<?php 
/* получатели - замените на свой адрес */
$to= "<e.c.f.s@yandex.ru>" ;
/* тема/subject */
$subject = "Новая заявка на сайте";


$name = $_POST['name'];
$tel = $_POST['tel'];
$formName = $_POST['formName'];
$comment = $_POST['comment'];


/* сообщение */
$message = '
<html>
	<head>
	 <title>Новая заявка на сайте</title>
	</head>
	<body>
		<p>Имя: '.$name.'</p>
		<p>Номер телефона:'.$tel.' </p>
		<p>Отправлено с формы:'.$formName.' </p>
		<p>Комментарий: '.$comment.'</p>
	</body>
</html>
';

/* Для отправки HTML-почты вы можете установить шапку Content-type. */
$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";

/* дополнительные шапки */
$headers .= "From: Почтовый бот <main@Bot>\r\n";
// $headers .= "Cc: birthdayarchive@example.com\r\n";
// $headers .= "Bcc: birthdaycheck@example.com\r\n";

/* и теперь отправим из */
mail($to, $subject, $message, $headers);
?>