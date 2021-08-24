$(() => {
    window.Cart = { total: 0 };

  function calculateTotal(price) {
    Cart.total = parseFloat(price) + parseFloat(Cart.total.toString());
    $('#total').text(parseFloat(Cart.total));
  }

  function renderCart() {
    $('#total').text(Cart.total);
  }


  // renderCart();
  window.Cart.calculateTotal = calculateTotal;
  window.Cart.renderCart = renderCart;
});
