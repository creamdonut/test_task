$( function() {
	$('#calc').on('submit', function(submitEvent) { 
		var formData = $(this).serialize(); 

		submitEvent.preventDefault();

		$.ajax({
			method: "POST",
	  		url: "calc.php",
	  		data: formData,
	  		success: function(response){
	  			$('#result').html(response);
	  		}
		})

	} )

});

	  

