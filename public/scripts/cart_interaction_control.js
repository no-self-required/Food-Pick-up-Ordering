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

  //display cart items even after refresh the page
  let cart = localStorage.getItem('myCart');
  cart = JSON.parse(cart);

  if (cart) {
    for (const item of cart) {
      console.log('ITEMS---',item);
      $('#cart-items').append(inCartList.addItem(item));
    }
    Cart.renderCart();
  }

  //clear button interaction
  $('#clear').on('click', function () {
    localStorage.clear();
    $('#cart-items').empty();
    $('#total').empty();
    window.Cart.total = 0;
  });

  //add phone number interation
  $(window).keydown(function (event) {
    if (event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });

  $('#phoneNum').keyup(function () {
    str = $('#phoneNum').val()
    if (str.match(/[0-9]{3}[0-9]{3}[0-9]{4}/)) {
      $('#checkout').prop('disabled', false);
    } else {
      $('#checkout').prop('disabled', true);
    }
  });

  //connect post request to the checkout button
  $('#checkout').on('click', function (event) {
    event.preventDefault();

    $.post('/order', { cart },  function(data) {
      console.log('IN CART_INTERACTION--------', data);
    })
  })
})
