$(() => {

  const $top = $(`
      <img class="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfvLwClu5PU9riUu1FZ1LVM0_8tbyhZm3bfQ&usqp=CAU">
          <br>
          <p>Oki Sushi<br>
          Open 11:00 AM - 9:00 PM<br>
        555 Ellie St, Louisville, ON L9K 9Z9</p>
        `)

  window.$top = $top;
  $('.restaurant-title').append($top);
});
