$(() => {
  let cart = localStorage.getItem('myCart');
  console.log("CART-----", cart);
  let arr = JSON.parse(cart);
  let subTotal = 0;

  if (cart) {
    for (const item of arr) {
      subTotal += parseFloat(item.price);

      $('#cart-items').append(inCartList.addItem(item));
    }
  }

  window.Cart = { subTotal };

  function calculateSubTotal(price) {
    // console.log("cart.SubTotal:", Cart.subTotal + parseFloat(price))
    Cart.subTotal = parseFloat(price) + parseFloat(Cart.subTotal.toString());

    // Cart.tax = parseFloat(price) + parseFloat(Cart.tax.toString());
    // Cart.total =  Cart.subTotal + Cart.tax;
    $('#sub-total').text('$' + parseFloat(Cart.subTotal).toFixed(2));
    // $('#tax').text(parseFloat(Cart.tax));
    // $('#total').text(parseFloat(Cart.total));
  }

  function calculateTax() {
    Cart.tax = Cart.subTotal * .13
    $('#tax').text('$' + parseFloat(Cart.tax).toFixed(2));
  }


  function calculateTotal() {
    Cart.total = Cart.subTotal + Cart.tax
    $('#total').text('$' + parseFloat(Cart.total).toFixed(2));
  }

  function renderCart() {
    $('#sub-total').text(Cart.subTotal);
    $('#tax').text(Cart.tax);
    $('#total').text(Cart.total);
  }


  renderCart();
  window.Cart.calculateTax = calculateTax;
  window.Cart.calculateSubTotal = calculateSubTotal;
  window.Cart.calculateTotal = calculateTotal;
  window.Cart.renderCart = renderCart;
});
