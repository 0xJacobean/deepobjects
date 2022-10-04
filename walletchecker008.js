let cohortMintDate = "10.10";

let wallet = [
  "0x1234",
  "0x5678"
]

$( "#check-button" ).click(function() {
      console.log("clicked here", $("#address-field").text());

  if (wallet.includes($("#address-field").text())) {
    console.log("clicked here", $("#address-field").text());
    $("#success-message").val(`You are in The Cohort and will be able to mint on ${cohortMintDate}`);
    $( "#form-success" ).show('slow');
  } else {
    $( "#form-error" ).hide('slow');
  };
  
});
