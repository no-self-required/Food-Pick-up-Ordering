$(() => {
  window.header = {};

  const $pageHeader = $('#page-header');
  // let currentUser = null;
  function updateHeader(user) {
    currentUser = user;
    $pageHeader.find("#page-header__user-links").remove();
    let
      userLinks = `
      <nav id="page-header__user-links" class="page-header__user-links">
        <ul>
          <li class="login_button">Log In</li>
        </ul>
      </nav>
      `

    $pageHeader.append(userLinks);
  }

  window.header.update = updateHeader;

  $("header").on('click', '.login_button', () => {
    views_manager.show('logIn');
  });

});
