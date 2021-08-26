$(() => {
  window.orderConfirmation = {};

  function view(order) {
    return `
        <div class="inner-container">
          <h1>Thank you for your order</h1>
          <div class="prep-time">
            This will takes ${order.prepTime}.
          </div>
          <div class="order">
            <div class="right">
              ${order.name}
            </div>
            <div class="left">
              ${order.price}
            </div>
          </div>
        </div>
    `
  }
  window.orderConfirmation.view = view;


});
