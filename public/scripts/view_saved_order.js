$(() => {
  let addedItems = localStorage.getItem('myCart');

  if (addedItems) {
    for (const item of addedItems) {
    $.post("/users", item, function (data) {
    $('#cart-items').append(inCartList.addItem(data[0]));
    Cart.calculateTotal(data[0].price);
  });
  console.log(item);
  }
  }


});
