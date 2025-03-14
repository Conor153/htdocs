$("document").ready(function () {

  // /users
  $("#users").click(function () {
    $.getJSON("????????????????????", function (data) {
      console.log(data);

      let output = JSON.stringify(data, undefined, 4);
      $("#textarea").empty();
      // ???
    });
  });

  // /companies
  $("#companies").click(function () {
    // ???
    // ???
    // ???
  });


  // /users/userID
  $("#usersByID").click(function () {
    let userID = $("#userID").val();
    alert(userID);

    $.getJSON(`???`, function (data) {
      console.log(data);

      let output = JSON.stringify(data, undefined, 4);
      $("#textarea").empty();
      // ???
      // ???
      // ???
    });
  });
});
