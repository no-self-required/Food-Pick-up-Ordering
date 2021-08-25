$(() => {
  $('#phoneNum').ready(function() {
    $(window).keydown(function(event){
      if(event.keyCode == 13) {
        event.preventDefault();
        return false;
      }
    });
  });

  const form = $( "#phoneNum" );
  $('#checkout').prop('disabled', true);
  $('#phoneNum').keyup(function() {
    // console.log("phonenum:---", $('#phoneNum').val())
    // form.validate()
    str = $('#phoneNum').val()
    if(str.match(/[0-9]{3}-[0-9]{3}-[0-9]{4}/)) {
        $('#checkout').prop('disabled', false);
    } else {
      $('#checkout').prop('disabled', true);
    }
  });
  //     if($(this).valid()) {
});
// console.log("is valid?----", $(this).valid())
// if($('#phoneNum').val().length === 12) {
//  if($('#phoneNum').valid()) {

