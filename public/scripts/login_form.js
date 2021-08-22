$(() => {

  const $logInForm = $(`
  <form id="login-form" class="login-form">
        <p>Log in</p>

        <div class="loginForm_wrapper">
          <input type="text" name="name" placeholder="Name">
        </div>

        <div class="loginForm_wrapper">
          <input type="text" name="phoneNumber" placeholder="Phone number">
        </div>

        <div class="loginForm_wrapper">
          <button>View order</button>
        </div>
  </form>
  `);

  window.$logInForm = $logInForm;

  $logInForm.on('submit', function(event) {
    event.preventDefault();

    views_manager.show('login');

  });
});

//if !name, phonenumber: create order
//if name, phonenumber: show order
