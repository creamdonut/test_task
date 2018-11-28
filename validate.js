$( document ).ready(function(){
							  $( "submit" ).click(function(){ 
							    $( "form" ).submit(); 
							  });
							  $( "form" ).submit(function( event ){ 
							    event.preventDefault(); 
							   if (document.getElementById('datepicker').value == "мм.дд.гггг") 
							   alert('Пожалуйста,введите дату');
							  });
							});

$( document ).ready(function(){
							  $( "submit" ).click(function(){ 
							    $( "form" ).submit(); 
							  });
							  $( "form" ).submit(function( event2 ){ 
							    event2.preventDefault(); 
							   if ($('input[name=check]:checked').val() == "1" && document.getElementById('amount2').value == "")
							   alert('Пожалуйста, выберите сумму пополнения.');
							  });
							});

$( document ).ready(function(){
							  $( "submit" ).click(function(){ 
							    $( "form" ).submit(); 
							  });
							  $( "form" ).submit(function( event3 ){ 
							    event3.preventDefault(); 
							   if ($('input[name=check]:checked').val() == "1" && document.getElementById('amount2').value < "1000") 
							   alert('Пожалуйста, введите сумму от 1 000 до 3 000 000');
								if ($('input[name=check]:checked').val() == "1" && document.getElementById('amount2').value > "3000000") 
							   alert('Пожалуйста, введите сумму от 1 000 до 3 000 000');
							  });
							});