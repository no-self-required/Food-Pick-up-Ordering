$(() => {

  const $main = $('.main-container');
  const $container = $('.container');
  window.views_manager = {};

  window.views_manager.show = function(item) {
    $cartView.detach();
    // $confirmCart.detach();
    $menu.detach();
    $orderConfirmation.detach();

    switch(item) {
      case 'orderConfirm':
        $orderConfirmation.appendTo($container);
        // $confirmCart.appendTo($container);
        break;
      case 'start':
        $cartView.appendTo($main)
        $menu.appendTo($main)
        break;
      case 'error':
      views_manager.show('login');
    }
  }
})
