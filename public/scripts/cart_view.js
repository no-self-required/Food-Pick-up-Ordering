$(() => {
  const $cartView = $(`
      <div id="cart" class="col">
        <h3>Cart</h3>
      </div>
    `);
  window.$cartView = $cartView;
  $("#menu-cart").append($cartView);
});
