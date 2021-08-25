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
          <div>
             <form id="phoneform">
               <input type="tel"  name="phone" id="phoneNum" placeholder="123-123-1234" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required>
             </form>
             <button type="submit" id="checkout" class="btn btn-primary" form="phoneform" value="Check Out" disabled>Check Out</button>
          </div>
      <div class="menu-submit">
        <button type="submit" id="clear" class="btn btn-secondary">Clear Cart</button>
      </div>
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
