<?php 
error_reporting(E_ERROR);
$sum = $_POST['summa'];
$current_month = 2;
$month_qty = $_POST['srok'];
$summ_add = 0;
$check = $_POST['check'];
$days_n = getDaysInMonth($_POST['date']); 
$days_y = 365;
$final_sum = getCapitalization($sum, $summ_add, $days_n);

if ($check == '0') {
	$summ_add = 0;
} else {
	$summ_add = $_POST['popolnenie'];
}


if (empty($days_n) or empty($sum)) {
	die ('Ошибка. Выберите месяц и сумму.');
}

while ($current_month < $month_qty) {
	$final_sum = getCapitalization($final_sum, $summ_add, $days_n);
	$current_month+=1;
}

function getDaysInMonth($date) {
	$depositDateArray = preg_split('/\//', $date);
	return cal_days_in_month(CAL_GREGORIAN, $depositDateArray[0], $depositDateArray[2]);
}


function getCapitalization($sum, $summ_add, $days_n){
	global $check, $days_y;

	if ($check) {
		return  $sum + (($sum + $summ_add) * $days_n * (0.1/$days_y)) + $summ_add;
	} else {
		return $sum + (($sum) * $days_n * (0.1/$days_y));
	}
}

echo (int) $final_sum;


?>