$(() => {
  window.inCartList = {};

  function addItem(menu_items) {
    return `
      <div class="cart-wrapper">
        <div class="cart-left-column">
          <p>${menu_items.name}</p>
        </div>
        <div class="cart-right-column">
          <p>$${menu_items.price}</p>
        </div>

      </div>
    `;
  }
  window.inCartList.addItem = addItem;
});
