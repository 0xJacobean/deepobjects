let wallet = [
  "0x1234",
  "0x5678"
]

$( "#check-button" ).click(function(address) {
  console.log("clicked");
  if (fruits.includes(address.toString())) {
    $( "#form-success" ).show('slow');
  } else {
    $( "#form-error" ).hide('slow');
  };
  
});
