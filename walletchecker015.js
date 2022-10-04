let cohortMintDate = "10.10";

let wallet = [
  "0x1234",
  "0x5678"
]

$( "#exit" ).click(function() {
  $("#form-success").hide()
});

$( "#exit-bg" ).click(function(e) {
  if($(e.target).is("#exit-bg")) {
    $("#form-success").hide()
  }
});

$( "#check-button" ).click(function() {
  
  $("#check-button").val('initializing...')
  
  console.log("clicked here", $("#address-field").val());

  if (wallet.includes($("#address-field").val())) {
    console.log("clicked here", $("#address-field").val());
    $("#success-message").text(`You are in The Cohort and will be able to mint on ${cohortMintDate}`);
    $( "#form-success" ).show('slow');
  } else {
    $( "#form-error" ).hide('slow');
  };
  
  $("#check-button").val('Check Address')
  
});
