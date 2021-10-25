<?
if(isset($_SERVER['HTTP_X_REQUESTED_WITH']) && !empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest' && !empty($_POST['name'])) {
    $message = 'Имя: ' . $_POST['name'] . ' ';
    $message .= 'Телефон: ' . $_POST['phone'] . ' ';
    $message .= 'Марка авто: ' . $_POST['course'] . ' ';
    if(!empty($_POST['text'])) {
        $message .= 'Текст: ' . $_POST['text'] . ' ';
    }
    $mailTo = "dastish.shop@gmail.com"; // Ваш e-mail
    $subject = "Заказать брелок"; // Тема сообщения
    $headers= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=utf-8\r\n";
    $headers .= "From: www.dastishshop.com <www.dastishshop.com>\r\n";
    if(mail($mailTo, $subject, $message, $headers)) {
        echo "Спасибо, ".$_POST['name'].", мы свяжемся с вами в самое ближайшее время!"; 
    } else {
        echo "Сообщение не отправлено!"; 
    }
}
?>