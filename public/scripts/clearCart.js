$(() => {
  $('#clear').on('click', function(){
    localStorage.clear();
    $('#cart-items').empty();
    $('#total').empty();
    window.Cart.total = 0;
  });
})


