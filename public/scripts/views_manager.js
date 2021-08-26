$(() => {

  const $main = $('.cart_container');

  window.views_manager = {};

  window.views_manager.show = function(item) {
    $cartInteraction.detach();
    $menu.detach();
    $orderConfirmation.detach();

    switch(item) {
      case 'orderConfirm':
        $orderConfirmation.appendTo($main);
        break;
      case 'start':
        $cartInteraction.appendTo($main)
        $menu.appendTo($main)
        break;
      case 'error':
      views_manager.show('login');
    }
  }
})
