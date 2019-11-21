
$(document).ready(function() {
$("#blanks form").submit(function(event) {
  var bornInput = $("input#born").val();
  var nameInput = $("input#name").val();
  var addressInput = $("input#address").val();
  var cityInput= $("input#city").val();
  var stateInput = $("input#state").val();
  var zipcodeInput = $("input#zipcode").val();
  var billingInput = $("input#billing").val();
  var speedInput = $("input#speed").val();

  $(".born").text(bornInput);
  $(".name").text(nameInput);
  $(".address").text(addressInput);
  $(".city").text(cityInput);
  $(".state").text(stateInput);
  $(".zipcode").text(zipcodeInput);
  $(".billing").text(billingInput);
  $(".speed").text(speedInput);

  $("#order").show();

  event.preventDefault();
});

});
