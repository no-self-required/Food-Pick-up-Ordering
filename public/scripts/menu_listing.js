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
      // console.log('MENU-----', menu);
      for (let item of menu) {
        $('#menu').append(createMenu(item));
      }
    });
  }

  $('#menu').on('click', '.menu-listing', function () {

    console.log($(this).attr("data-id"));
    let menuID = $(this).attr("data-id");

    let cart = localStorage.getItem('myCart');
    if (!cart) {
      cart = [];
    } else {
      cart = JSON.parse(cart);
    }

    $.post("/users", { menuID }, function (data) {
      // console.log("DATA----", data);
      let cartItem = {name: data[0].name, price: data[0].price}
      cart.push(cartItem);
      localStorage.setItem('myCart', JSON.stringify(cart));
      $('#cart-items').append(inCartList.addItem(cartItem));
      // Cart.renderCart();
      Cart.calculateTotal(data[0].price);
    });
  })

  const reloadCart = function () {
    let cart = localStorage.getItem('myCart');
    // console.log("CART-----", cart);
    let arr = JSON.parse(cart);
    let total = 0;
    if (cart) {
      for (const item of arr) {
        // console.log("ITEM-----", item);
        total += parseInt(item.price);
        $('#cart-items').append(inCartList.addItem(item));
      }
    }
    $('#total').text(total);
  }

  $('#clear-cart').on('click', function () {
    console.log('it worked')
    localStorage.clear()
    $('#cart-items').empty()
    $('#total').empty()
    reloadCart()
    });

  // reloadCart();
  loadMenu();


  // console.log("LOADED-----");
  // localStorage.clear();
});
