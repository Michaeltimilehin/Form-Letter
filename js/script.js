$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const yournameInput = $("input#yourname").val();
    const recipientnameInput = $("input#recipientname").val();
    const purposeInput= $("input#purpose").val();


    $(".yourname").append(yournameInput);
    $(".recipientname").append(recipientnameInput);
    $(".purpose").append(purposeInput);

    $("#story").show();

    event.preventDefault();
    
  });
});