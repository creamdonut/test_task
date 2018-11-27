$( function() {
	$('#calc').on('submit', function(submitEvent) {  //.on - listener 
		var formData = $(this).serialize(); //this === calc

		submitEvent.preventDefault();

		$.ajax({
			method: "POST",
	  		url: "calc.php",
	  		data: formData,
	  		success: function(response){
	  			$('#result').html(response);
	  		}
		})
  // 		.done(function( response ) {
  //   		$('#result').html(response)
		// })
	} )

});