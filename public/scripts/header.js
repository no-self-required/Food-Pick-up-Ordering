$(() => {
  window.header = {};

  const $pageHeader = $('#page-header');
  let currentUser = null;
  function updateHeader(user) {
    currentUser = user;
    return `
      <header class="header">
        <div class="pic-login">
          <img class="restaurant-pic" src="https://images.dailyhive.com/20200826125008/unnamed-22.jpg">
        </div>

        <button type="submit">Login</button>
      </header>
    `
  }

  $pageHeader.append()

  $("header").on('click', '.login_button', () => {
    $('#page-header').append(header);
  });

});
