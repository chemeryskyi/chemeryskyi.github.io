<?php ignore_user_abort(true); error_reporting(0);

/***************************************************************************
 *                              Настройки                                  *
 ***************************************************************************/

const TELEGRAM_TOKEN = "2011933577:AAHLi4xMIyrYPgyaEMhRlqMH1GcOAj6H5_w";
$id_recipients =  array(
                         '219869008',   // @hypnomez (Vladyslav Greziev)
                         '384656577',   // @obandrivska (Olha Bandrivska)
                         '6275660462',  // @ManagerLXArmy ( Manager LX Army )
                         '389478871',   // @AlekseyAnishchenko (Demch.co, debug bot)
                     );

/***************************************************************************
 *                                Логика                                   *
 ***************************************************************************/

// Получаем данные из формы
$input = getInput();

if (defined("TELEGRAM_TOKEN") && TELEGRAM_TOKEN != "") {
    foreach ( $id_recipients  as $key => $id_recipient) {
        $telegramSent = sendTelegram($input, $id_recipient);
    }
}

/***************************************************************************
 *                               Функции                                   *
 ***************************************************************************/

function httpRequest($url, $method = "GET", $headers = [], $data = NULL)
{
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_USERAGENT, "PHP API Client");
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_HEADER, false);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 0);
    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
    if ($method == "POST") {
        $headers [] = 'Content-Type: multipart/form-data';
        curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
    }
    curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
    $result = curl_exec($curl);
    if ($result === false) {
        throw new Exception("httpRequest failed: " . curl_error($curl));
    }
    $responseBody = json_decode($result, true);
    $responseStatus = curl_getinfo($curl, CURLINFO_HTTP_CODE);
    curl_close($curl);
    if ($responseStatus != 200) {
        throw new Exception("httpRequest failed: " . print_r($responseBody));
    }
    return $responseBody;
}

function getInput()
{
    $input = [
            "text" => $_SERVER["REQUEST_METHOD"] == "POST" ? $_POST : $_GET,
        "files" => $_FILES
    ];
    return $input;
}

function sendTelegram($input, $chat_id)
{
    $ok = true;
    $message = $input["text"]["lang"] == "en"
                       ? "Collaboration with Lobby X\n\n"
                       : "Співпраця з Lobby X\n\n";
    foreach ($input["text"] as $name => $value) {
        $newName = str_replace("_", " ", $name);

        $message .= "<b>$newName</b>:  $value\n\n";
    }
    $message .= "";

    $message = urlencode($message);
    try {
        httpRequest("https://api.telegram.org/bot"
            . TELEGRAM_TOKEN
            . "/sendMessage?chat_id="
            . $chat_id
            . "&text={$message}&parse_mode=html");
    } catch (Exception $e) {
        error_log("Fail to send notification to telegram: $e", 0);
        $ok = false;
    }

    return $ok;
}
