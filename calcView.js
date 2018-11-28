$( function() {
  $( "#datepicker" ).datepicker();

  $( "#slider1" ).slider({
    range: "min",
    value: 1000,
    min: 1000,
    max: 3000000,
    slide: function( event, ui ) {
      $( "#amount1" ).val(ui.value);
    }
  });


  $( "#slider2" ).slider({
    range: "min",
    value: 1000,
    min: 1000,
    max: 3000000,
    slide: function( event, ui ) {
      $( "#amount2" ).val(ui.value);
    }
  });
});


