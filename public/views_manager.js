$(() => {

  const $main = $('#main-content');

  window.views_manager = {};

  window.views_manager.show = function(item) {
    $logInForm.detach();

    switch(item) {
      case 'login':
        $logInForm.appendTo($main);
        break;

      case 'error':
      views_manager.show('login');
    }

    break;
  }
})
