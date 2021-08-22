function logIn(data) {
  return $.ajax({
    method: "POST",
    url: "/",
    data
  });
}
