function getAllMenu() {
  return $.ajax({
    method: "GET",
    url: "/users"
  });
}
