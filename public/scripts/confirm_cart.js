$(() => {
  const $confirmCart = $(`
      <div id="confirmcart" class="col">
        <h3>Cart</h3>
      </div>
    `);

  window.$confirmCart = $confirmCart;
  $("#menu-cart").append($confirmCart);
});
