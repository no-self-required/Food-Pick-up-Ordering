$(() => {
  window.menuList = {};

  function createMenu(menu_items) {
    return `
      <div class="menu-listing" data-id="${menu_items.id}">
        <section class="menu-listing_image">
          <img src="${menu_items.image}">
        </section>
        <section class="menu-listing_details">
          <p class="menu-listing_name">name: ${menu_items.name}</p>
          <p class="menu-listing_description">description: ${menu_items.description}</p>
          <p class="menu-listing_price">price: ${menu_items.price}</p>
        </section>
      </div>
    `
  }

  window.menuList.createMenu = createMenu;

  const loadMenu = function () {
    $.ajax('/users', { method: 'GET' })
    .then(function (menu) {
      for (let item of menu) {
        $('.menu-container').append(createMenu(item));
      }
    });
  }

  $('.menu-container').on('click', '.menu-listing', function () {

    let menuID = $(this).attr("data-id");

    let cart = localStorage.getItem('myCart');
    if (!cart) {
      cart = [];
    } else {
      cart = JSON.parse(cart);
    }
    $.post("/users", { menuID }, function (data) {
      cart.push(data[0]);
      localStorage.setItem('myCart', JSON.stringify(cart));
      $('#cart-items').append(inCartList.addItem(data[0]));
      Cart.calculateTotal(data[0].price);
    });
  })

  loadMenu();

});
