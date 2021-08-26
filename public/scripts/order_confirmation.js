$(() => {

  const $orderConfirmation = $(`
        <div class="inner-container">
          <h1>Thank you for your order</h1>
        </div>
        <form class="confirm">
          <button id="clear">Confirm</button>
        </form>
    `)
  window.$orderConfirmation = $orderConfirmation;

    $('.cart_container').on('click', '#clear', function () {
    localStorage.clear();
    $('$cartInteraction #cart-items').empty();
    $('#total').empty();
    window.Cart.subTotal = 0;
    views_manager.show('start');
  })


});
