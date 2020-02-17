<?php

$recepient = "e.c.f.s@ya.ru";
$date = date('Y-m-d H:i:s');

$email = trim($_POST["email"]);
$utm_source = $_POST["utm_source"];
$utm_medium = $_POST["utm_medium"];
$utm_campaign = $_POST["utm_campaign"];
$utm_content = $_POST["utm_content"];
$utm_term = $_POST["utm_term"];

$message = "Посетитель оставил свой Email -  $email \n Дата и время: $date \n  utm_source: $utm_source\n utm_medium: $utm_medium \n utm_campaign: $utm_campaign \n utm_content: $utm_content \n utm_term: $utm_term";




//Выведет Текущее время: 17:16:17 и дата: 03.12.01

$pagetitle = "Посетитель оставил Email $date";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");