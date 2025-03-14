$("document").ready(function () {
  let users = [];



  $.getJSON("http://localhost:3000/users", function (data) {
    console.log(data);
    users = data;                      // storing a working copy in users array too

    // get users and add to table.  Use "tbody" id.
    // ???
    // ???
    // ???
  });


  // rank handler
  $("#rank").change(function () {
    console.log($("#rank").val());    // this shows how to get the value from slider

    // ???
    // ???
    // ???
    
  });

});
