let cohortMintDate = "10.10";
let errorMessage = "Sorry, wallet not found"
let successMessage = "You are in The Cohort."

let wallet = [
  "0x1234",
  "0x5678"
]

$(document).ready(function() {
  $(window).keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });
});

$( ".exit" ).click(function() {
  $("#form-success").hide()
  $("#form-error").hide()
});

$( ".fullscreen" ).click(function(e) {
  if($(e.target).is("#exit-bg")) {
    $("#form-success").hide()
    $("#form-error").hide()
  }
});

$( "#check-button" ).click(function() {
  
  $("#check-button").val('initializing...')
  
  console.log("clicked here", $("#address-field").val());

  if (wallet.includes($("#address-field").val())) {
    console.log("clicked here", $("#address-field").val());
    $("#success-message").text(successMessage);
    $( "#form-success" ).show('slow');
  } else {
    $("#error-message").text(errorMessage);
    $( "#form-error" ).show('slow');
  };
  
  $("#check-button").val('Check Address')
  
});
