<?
/**
 * Write data to log file.
 *
 * @param mixed $data
 * @param string $title
 *
 * @return bool
 */

 $defaults = array('first_name' => '', 'last_name' => '', 'phone' => '', 'email' => '',);

//Обрабатываем файлы
 $queryUrl = 'https://woof.bitrix24.ru/rest/1/mku71bkmm85hiwrr/crm.lead.add.json';
 $queryData = http_build_query(array(
 'fields' => array(
 		'TITLE' => 'fghfghfghfghfgh',
 		'UF_CRM_1544194407141' =>   {"fileData": ["1.gif", "R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="]},
		'NAME' => 'hhh',
		'SOURCE_ID' => 'WEB',
 ),
 'params' => array("REGISTER_SONET_EVENT" => "Y")
 ));

 $curl = curl_init();
 curl_setopt_array($curl, array(
 CURLOPT_SSL_VERIFYPEER => 0,
 CURLOPT_POST => 1,
 CURLOPT_HEADER => 0,
 CURLOPT_RETURNTRANSFER => 1,
 CURLOPT_URL => $queryUrl,
 CURLOPT_POSTFIELDS => $queryData,
 ));

 $result = curl_exec($curl);
 curl_close($curl);



 $result = json_decode($result, 1);

 if (array_key_exists('error', $result)){
 	echo "Ошибка при сохранении лида: ".$result['error_description']."<br/>";
 } else{
	header('Location: /');	
}


