$(() => {

  const $header = $(`
      <div class="Oki-login">
        <div class="pic-login">
          <h1 class="restaurant-name">Oki Sushi</h1>
        </div>
        <div class="login">
          <form method="GET" action='/login'>
            <button type="login">Login</button>
          </form>
        </div>
      </div>
    `)
  window.$header = $header;

  $('header').append($header);
})
