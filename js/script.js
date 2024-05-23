$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const yournameInput = $("input#yourname").val();
    const recipientnameInput = $("input#recipientname").val();
    const schoolnameInput =$("input#schoolname").val();
    const phonenumberInput =$("input#phonenumber").val();
    const emailaddressInput =$("input#emailaddress").val();


    $(".yourname").append(yournameInput);
    $(".recipientname").append(recipientnameInput);
    $(".schoolname").append(schoolnameInput);
    $(".phonenumber").append(phonenumberInput);
    $(".emailaddress").append(emailaddressInput);

    $("#story").show();

    event.preventDefault();
    
  });
});