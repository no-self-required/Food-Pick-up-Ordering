<<<<<<< HEAD
   function createMenu(menu_items) {
=======

$(() => {

  function createMenu(menu_items) {
>>>>>>> 00fba29daa1279f8e4c4f98e68d811e5aabfdb1d
    return `
      <article class="menu-listing">
        <section class="menu-listing_image">
          <img src="${menu_items.image}">
        </section>
        <section class="menu-listing_details">
          <p class="menu-listing_name">${menu_items.name}</p>
          <p class="menu-listing_description">${menu_items.description}</p>
          <p class="menu-listing_price">${menu_items.price}</p>
        </section>
      </article>
    `
  }

<<<<<<< HEAD

exports.createMenu = createMenu;
=======
  $.ajax('/users', {
      method: 'GET'
    })
    .then(function (menu) {
      for (let item of menu) {
        $('#menu').append(createMenu(item));
      }
    });
});
>>>>>>> 00fba29daa1279f8e4c4f98e68d811e5aabfdb1d
