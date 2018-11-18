<?php 

$summn_1 = !empty($_POST['summa']) ? $_POST['summa'] : 0;
$srok = $_POST['srok']; 
$summadd = $_POST['popolnenie'];
$daysn = getDaysInMonth($_POST['date']); 
$daysy = 365;
$check = $_POST['check'];

if (empty($daysn) or empty($summn_1)) {
	die ('Ошибка. Выберите месяц и сумму.');
}

$summn = $summn_1+(($summn_1)*$daysn*(10/$daysy));

if ($check){
	$summn = $summn + $summadd;
} 
	// $summn = $summn_1 + (($summn_1 + $summadd) * $daysn * (10/$daysy)); 
	//  В задании не совсем понятно обозначены перемененные, из-за чего не совсем становится понятна сама формула расчёта. По факту задания требуется рассчитать сколько денег человек получит по вкладу от 1 до 5 лет при разных условиях. Но формула считается какую-то сумму на счёте на месяц N. Поле "Срок вклада" не применяется в формуле, на основе которой можно было бы посчитать сколько денег человек получит по истечению определенного срока, в данном случае от 1 до 5 лет. 


echo (int) $summn;

function getDaysInMonth($date) {
	$depositDateArray = preg_split('/\//', $date);
	return cal_days_in_month(CAL_GREGORIAN, $depositDateArray[0], $depositDateArray[2]);
}

?>

