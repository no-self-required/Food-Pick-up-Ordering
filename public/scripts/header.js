$(() => {
  window.header = {};

  const $header = $(
    `
      <header class="header">
      <div class="Oki-login">
      <div class="pic-login">
        <h1 class="restaurant-name">Oki Sushi</h1>
      </div>
      <!-- <header id="page-header"></header> -->
      <!-- <div class="login">
        <button type="submit">LOGIN</button>
        <img class="restaurant-pic" src="https://images.dailyhive.com/20200826125008/unnamed-22.jpg">
      </div> -->
      <div class="login">
        <form method="GET" action='/login'>
          <button type="login">Login</button>
        </form>
      </div>
    </div>
    `
  )

  window.$header = $header;
  $('.cart_container').append($header);
});
