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

    const data = $(this).serialize();
    console.log("DATA------", data);
    // logIn(data)
    //   .then(json => {
    //     console.log(json);
    //     if (!json.user) {
    //       views_manager.show('error', 'Failed to login');
    //       return;
    //     }
    //     console.log(json.user);
    //     header.update(json.user);
    //     views_manager.show('listings');
    //   });
  });
});

//if !name, phonenumber: create order
//if name, phonenumber: show order
