$(() => {

  const $cartInteraction = $(`
    <form class="added-menu-items">
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
      </div>
      <button type="button" class="btn btn-secondary">Clear Cart</button>
    </form>
  `);

  window.$cartInteraction = $cartInteraction;
  $('#cart').append($cartInteraction);

  let cart = localStorage.getItem('myCart');
  cart = JSON.parse(cart);
  console.log('CART------', typeof(cart));

  if (cart) {
    for (const item of cart) {
      console.log('ITEMS---',item);
      $('#cart-items').append(inCartList.addItem(item));
    }
    Cart.renderCart();
  }

  $('.added-menu-items').on('click', function (event) {
    event.preventDefault();

    $.post('/order', {cart},  function(data) {
      console.log('IN CART_INTERACTION--------', data);
    })
  })
})
