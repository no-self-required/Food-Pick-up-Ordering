$(() => {
  const $cartInteraction = $(`
    <div>
      <label for="phone">Phone number:</label>
        <form id="phoneform">
          <input type="tel"  name="phone" id="phoneNum" pattern="/^\d{10}$/" required>
        </form>
          <button type="submit" id="checkout" class="btn btn-primary" form="phoneform" value="Check Out" disabled>Check Out</button>
    </div>
      <div class="menu-submit">
        <button type="submit" id="clear" class="btn btn-secondary">Clear Cart</button>
      </div>
  `);

  const $confirmationCart = $(`
  <form class="added-menu-items">
    <div id="cart-items">
    </div>
    <div class="cart-wrapper">
      <div class="cart-left-column">
        <p class="sub-total">Sub Total</p>
        <p class="tax">Tax(13%)</p>
        <p class="total">Total</p>
      </div>
      <div class="cart-right-column">
        <p class="sub-total" id="sub-total"></p>
        <p class="tax" id="tax"></p>
        <p class="total" id="total"></p>
      </div>
    </div>
  </form>
`);

  window.$cartInteraction = $cartInteraction;
  window.$confirmationCart = $confirmationCart;

  $("#cart").append($confirmationCart);
  $(".added-menu-items").append($cartInteraction);

  //display cart items even after refresh the page
  let cart = localStorage.getItem("myCart");
  cart = JSON.parse(cart);

  if (cart) {
    for (const item of cart) {
      console.log("what is in my cart:", cart);
      $("#cart-items").append(inCartList.addItem(item));
    }
    Cart.calculateSubTotal(0);
    Cart.calculateTax();
    Cart.calculateTotal();
  }

  //clear button interaction
  $("#clear").on("click", function () {
    localStorage.clear();
    $("#cart-items").empty();
    $("#sub-total").empty();
    $("#total").empty();
    $("#tax").empty();
    window.Cart.subTotal = 0;
  });

  //add phone number interation
  let phoneNumber = "";

  $("#phoneNum").keyup(function () {
    phoneNumber = $("#phoneNum").val();
    if (phoneNumber.match(/^\d{10}$/)) {
      $("#checkout").prop("disabled", false);
    } else {
      $("#checkout").prop("disabled", true);
    }
  });

  //connect post request to the checkout button, and send the cart item ids, and the phone number
  $("#checkout").on("click", function (event) {
    event.preventDefault();
    console.log("LOCAL STORAGE-----", localStorage);
    const cart = JSON.parse(localStorage.myCart);
    let total = Cart.subTotal;

    views_manager.show("orderConfirm");

    $.post("/order", { cart, phoneNumber, total }, function (data) {
      console.log("IN CART_INTERACTION--------", data);
    });
  });
});
