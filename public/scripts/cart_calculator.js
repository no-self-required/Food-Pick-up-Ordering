$(() => {
  let cart = localStorage.getItem('myCart');
  console.log("CART-----", cart);
  let arr = JSON.parse(cart);
  let total = 0;
  let tax = 0;

  if (cart) {
    for (const item of arr) {
      total += parseFloat(item.price);
      tax += total * 0.13;
      $('#cart-items').append(inCartList.addItem(item));
    }
  }

  window.Cart = { total };

  function calculateTotal(price) {
    Cart.total = parseFloat(price) + parseFloat(Cart.total.toString());
    $('#total').text(parseFloat(Cart.total));
  }

  function renderCart() {
    $('#total').text(Cart.total);
  }


  renderCart();
  window.Cart.calculateTotal = calculateTotal;
  window.Cart.renderCart = renderCart;
});
