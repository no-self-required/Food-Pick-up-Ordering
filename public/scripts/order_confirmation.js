$(() => {

  const $orderConfirmation = $(`
        <center>
        <div class="inner-container">
          <h1>Thank you for your order</h1>
        </div>
        <form class="confirm">
          <button id="clear" class="btn btn-success">Confirm</button>
        </form>
        </center>
    `)
  window.$orderConfirmation = $orderConfirmation;

    $('.main-container').on('click', '#clear', function () {
    localStorage.clear();
    $('$cartInteraction #cart-items').empty();
    $('#total').empty();
    window.Cart.subTotal = 0;
    views_manager.show('start');
  })

});

// const $orderConfirmation = function($(`
// <div class="inner-container">
//   <h1>Thank you for your order</h1>
// </div>
// <form class="confirm">
//   <button id="clear">Confirm</button>
// </form>
// `)
