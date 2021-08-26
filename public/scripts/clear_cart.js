  //clear button interaction
  $(() => {
    window.button = {};

    const clearFunction = function (target) {
      $(target).on('click', '#clear', function () {
        localStorage.clear();
        $('#cart-items').empty();
        $('#total').empty();
        window.Cart.subTotal = 0;
      });
    }

    function clear(target) {
      return clearFunction(target);
    }

  window.button.clear = clear;

})

