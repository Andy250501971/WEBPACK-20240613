<?php
// Проверка существования файла
if (!file_exists('./PHPMailer/PHPMailerAutoload.php')) {
    die('PHPMailer autoload file not found at expected location.');
}

// подключение библиотеки
require './PHPMailer/PHPMailerAutoload.php';

// настройка PHPMailer
$mail = new PHPMailer;

// данные
$name = $_POST['name'];
$phone = $_POST['phone'];
$textarea = $_POST['textarea'];

// настройка почты
$mail->isSMTP();
$mail->Host = 'smtp.yandex.ru'; // SMTP сервер моей почты
$mail->CharSet = 'UTF-8';
$mail->SMTPAuth = true;
$mail->Username = 'Ay250507@yandex.ru'; // логин на почте
$mail->Password = 'chnhnkjgjpxvtvew'; // пароль на почте
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;

// контент письма
$mail->Subject = 'Заявка с сайта'; // название письма
$body = '<p>Имя: <strong>' . $name . '</strong></p>' .
        '<p>Телефон: <strong>' . $phone . '</strong></p>' .
        '<p>Сообщение: <strong>' . $textarea . '</strong></p>';
$mail->AltBody = 'Имя: ' . $name . "\n" .
                 'Телефон: ' . $phone . "\n" .
                 'Сообщение: ' . $textarea;

$mail->setFrom('Ay250507@yandex.ru', 'Заявка с сайта'); // адрес смой почты и имя отправителя

// получатель письма
$mail->addAddress('andrey-nov@mail.ru');
$mail->addAddress('Ay250507@yandex.ru');

// отправка сообщения
$mail->isHTML(true);
$mail->Body = $body;

if(!$mail->send()) {
    echo 'Сообщение не было отправлено! Причина ошибки: ' . $mail->ErrorInfo;
} else {
	echo 'Сообщение успешно отправлено!';
}
?>

