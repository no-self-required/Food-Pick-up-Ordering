$(() => {

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

  const loadMenu = function () {
    $.ajax('/users', { method: 'GET' })
    .then(function (menu) {
      for (let item of menu) {
        $('#menu').append(createMenu(item));
      }
    });
<<<<<<< HEAD

    $('.menu-listing').on('click'(function() {
      $('#cart').append('hello')
    }))
=======
  }


  $('#menu').on('click', '.menu-listing', function () {

    console.log($(this).attr("data-id"));
    let menuID = $(this).attr("data-id");

    let cart = sessionStorage.getItem('myCart');
    if (!cart) {
      cart = [];

    } else {
      cart = JSON.parse(cart);
    }
    cart.push(parseInt(menuID));
    sessionStorage.setItem('myCart', JSON.stringify(cart));
    $('#cart').text(cart.length);

    $.post("/users", {menuID}, function (data) {
      console.log('----DATA', data);
    });


  })

  loadMenu();
  sessionStorage.clear();
>>>>>>> 9a75cb256ee0c5a823838b7513863d0e4c24c606
});
