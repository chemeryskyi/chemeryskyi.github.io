<?
//Обрабатываем файлы
if (isset($_FILES)) { //если есть файлы в форме
  foreach ($_FILES as $file_item) {
    if (!is_array($file_item['error'])) { //проверяем множественное или нет поле файла
      if ($file_item['error'] == UPLOAD_ERR_OK) {
        $mail->AddAttachment($file_item['tmp_name'],$file_item['name']);
      }
    } else {
      foreach ($file_item["error"] as $key => $error){
        if ($error == UPLOAD_ERR_OK) {
          $tmp_name = $file_item["tmp_name"][$key];
          $name = $file_item["name"][$key];
          $mail->AddAttachment($tmp_name,$name);
        }
      }
    }
  }
}
//Обрабатываем файлы


?>