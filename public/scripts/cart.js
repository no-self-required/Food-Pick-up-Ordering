$(() => {
  const $cartSkeleton = $(
    `<div id="container" class="container">
      <div id="menu" class="col"></div>
      <div id="cart"  class="col">
        <h3>Cart</h3>
      </div>
    </div>
  `);

  window.$cartSkeleton = $cartSkeleton;

})
