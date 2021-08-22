$(() => {
  logIn().then(function( json ) {
    views_manager.show('login');
  });
});
