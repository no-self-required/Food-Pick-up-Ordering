$(() => {
  const $menu = $(`
    <div id="menu" class="col">
    </div>
  `);
  window.$menu = $menu;
  $("#menu-cart").append($menu);
});
