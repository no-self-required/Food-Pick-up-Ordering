$(() => {
  $('.menu-submit').on('click', '.menu-listing', function () {

    console.log($(this).attr("data-id"));
    let menuID = $(this).attr("data-id");

    let cart = localStorage.getItem('myCart');
    if (!cart) {
      cart = [];
    } else {
      cart = JSON.parse(cart);
    }

    $.post("/users", {
      menuID
    }, function (data) {
      // console.log("DATA----", data);
      let cartItem = {
        name: data[0].name,
        price: data[0].price
      }
      cart.push(cartItem);
      localStorage.setItem('myCart', JSON.stringify(cart));
      $('#cart-items').append(inCartList.addItem(cartItem));
      Cart.renderCart()
      Cart.calculateTotal(data[0].price);
    });
  })
})
