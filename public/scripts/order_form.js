$(() => {
  window.inCartList = {};

  function createOrder(menu_items) {
    if (!menu_items) {
      return `
      <form class="select-menu-items">
      <h3>Cart</h3>
      <center><h3>Please add item</h3></center>
      </form>
      `
    }
    return `
    <form class="select-menu-items">
      <div class="shopping-cart">
        <h3>Cart</h3>

        <div class="cart-wrapper">
          <div class="cart-left-column">
            <p>${menu_items.name}</p>
          </div>
          <div class="cart-right-column">
            <p>$${menu_items.price}</p>
          </div>
        </div>

        <div class="cart-wrapper">
          <div class="cart-left-column">
            <p>Total</p>
          </div>
          <div class="cart-right-column">
            <p>${menu_items.price}</p>
          </div>
        </div>

        <div class="menu-submit">
          <button type="button" class="btn btn-primary">Check Out</button>
          <button type="button" class="btn btn-secondary">Reset<button>
        </div>

      </div>
    </form>
    `
  }
  window.inCartList.createOrder = createOrder;

});
