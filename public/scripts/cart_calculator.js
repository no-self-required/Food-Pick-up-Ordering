$(() => {
  let cart = localStorage.getItem('myCart');
  console.log("CART-----", cart);
  let arr = JSON.parse(cart);
  let total = 0;
  let tax = 0;

  if (cart) {
    for (const item of arr) {
      total += parseFloat(item.price);

      $('#cart-items').append(inCartList.addItem(item));
    }
  }

  window.Cart = { total };

  function calculateTotal(price) {
    Cart.subTotal = parseFloat(price) + parseFloat(Cart.total.toString());
    // Cart.tax = parseFloat(price) + parseFloat(Cart.tax.toString());
    // Cart.total =  Cart.subTotal + Cart.tax;
    $('#sub-total').text(parseFloat(Cart.subTotal));
    // $('#tax').text(parseFloat(Cart.tax));
    // $('#total').text(parseFloat(Cart.total));
  }

  function renderCart() {
    $('#sub-total').text(Cart.subTotal);
    // $('#tax').text(Cart.tax);
    // $('#total').text(Cart.total);
  }


  renderCart();
  window.Cart.calculateTotal = calculateTotal;
  window.Cart.renderCart = renderCart;
});
