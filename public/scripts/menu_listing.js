$(() => {


  function createMenu(menu_items) {
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
});
