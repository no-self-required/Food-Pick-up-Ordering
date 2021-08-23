$(() => {
  window.orderList = {};

  function createOrder(menu_items, isTrue) {
    return `
    <article class="order-list">
        <section class="menu_items_name">
          <h3 class="menu-item__name">${menu_items.name}</h3>
            <div class="menu-item_price">$${menu_items.price/100.0}</div>
            <div class="menu-item_price">Total Price: $${menu_items.price/100.0}</div>
          </footer>
        </section>
      </article>
    `
  }

});

// (id, client_id, menu_item_id, order_time, prep_time, note, is_paid, total_price, order_status)
