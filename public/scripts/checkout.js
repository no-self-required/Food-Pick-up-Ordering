$(() => {
  window.

  function cart() {
    return `
      <div id="container">
      <div id="menu"></div>
      <div id="cart">
        <form class="select-menu-items">
          <h3>Cart</h3>
          <div id="cart-items">
          </div>
          <div class="cart-wrapper">
            <div class="cart-left-column">
              <p>Total</p>
            </div>
            <div id="total" class="cart-right-column">
            </div>
            </div>
          <div class="menu-submit">
            <button type="button" class="btn btn-primary">Check Out</button>
            <button type="button" class="btn btn-secondary">Clear Cart</button>
          </div>
        </form>
      </div>
    </div>
    `
  }



  $('.menu-submit').on('click', '.menu-listing', function () {

    console.log($(this).attr("data-id"));
    let menuID = $(this).attr("data-id");

    let cart = localStorage.getItem('myCart');
    if (!cart) {
      cart = [];
    } else {
      cart = JSON.parse(cart);
    }

    $.post("/users", {
      menuID
    }, function (data) {
      // console.log("DATA----", data);
      let cartItem = {
        name: data[0].name,
        price: data[0].price
      }
      cart.push(cartItem);
      localStorage.setItem('myCart', JSON.stringify(cart));
      $('#cart-items').append(inCartList.addItem(cartItem));
      Cart.renderCart()
      Cart.calculateTotal(data[0].price);
    });
  })
})
