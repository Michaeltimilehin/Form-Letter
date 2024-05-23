$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const yournameInput = $("input#yourname").val();
    const recipientnameInput = $("input#recipientname").val();
    const purposeInput= $("input#purpose").val();
    const schoolnameInput =$("input#schoolname").val();
    const phonenumberInput =$("input#phonenumber").val();
    


    $(".yourname").append(yournameInput);
    $(".recipientname").append(recipientnameInput);
    $(".purpose").append(purposeInput);
    $(".schoolname").append(schoolnameInput);
    $(".phonenumber").append(phonenumberInput);


    $("#story").show();

    event.preventDefault();
    
  });
});