$("document").ready(function () {

  // /users
  $("#users").click(function () {
    $.getJSON("http://localhost:3000/users", function (data) {
      console.log(data);

      let output = JSON.stringify(data, undefined, 4);
      $("#textarea").empty();
      $("#textarea").append(output);
    });
  });

  // /companies
  $("#companies").click(function () {
    $.getJSON("http://localhost:3000/companies", function (data) {
      console.log(data);

      let output = JSON.stringify(data, undefined, 4);
      $("#textarea").empty();
      $("#textarea").append(output);
    });
  });


  // /users/userID
  $("#usersByID").click(function () {
    let userID = $("#userID").val();
    alert(userID);

    $.getJSON(`http://localhost:3000/users/${userID}`, function (data) {
      console.log(data);

      let output = JSON.stringify(data, undefined, 4);
      console.log(output);
      $("#textarea").empty();
      if (output == "[]")
        {
          $("#textarea").append("UserId is invalid");
        }
      else
      $("#textarea").append(output);
    });
  });
});
