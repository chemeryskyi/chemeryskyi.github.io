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
 
 $queryUrl = 'https://3dkrestiki.bitrix24.ru/rest/2221/q3h3fw4r6kqj4pxd/crm.lead.add.json';
 $queryData = http_build_query(array(
 'fields' => array(
 	'TITLE' => $leadData['TITLE'],
		'SOURSE_ID' => $_POST['DATA']['SOURSE_ID'],
 		'TITLE' => $_POST['DATA']['TITLE'],
		'NAME' => $_POST['DATA']['NAME'],
		'COMMENTS' => $_POST['DATA']['COMMENTS'],
		'EMAIL' => array(array('VALUE' => $_POST['DATA']['EMAIL_WORK'], 'VALUE_TYPE' => 'WORK')),
		'PHONE' => array(array('VALUE' => $_POST['DATA']['PHONE_WORK'], 'VALUE_TYPE' => 'WORK')),
		'WEB' => array(array('VALUE' => $_POST['DATA']['WEB_WORK'], 'VALUE_TYPE' => 'WORK')),
		'SOURSE_ID' => 'Crystalit.biz/crm - desktop',
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


