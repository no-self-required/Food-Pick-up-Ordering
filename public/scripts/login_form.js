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
          <button>View order!!</button>
        </div>
  </form>
  `);

  window.$logInForm = $logInForm;

});

//if !name, phonenumber: create order
//if name, phonenumber: show order
