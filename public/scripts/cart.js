$(() => {
  if (!window.Cart) {
    window.Cart = {
      total: 0
    };
  }

  function calculateTotal(price) {
    Cart.total = parseFloat(price) + parseFloat(Cart.total.toString());
    $('#total').text(Cart.total);
  }

  function renderCart() {
    $('#total').text(Cart.total);
  }

  renderCart();
  window.Cart.calculateTotal = calculateTotal;
});
