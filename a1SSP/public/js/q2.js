$("document").ready(function () {
  let users = [];



  $.getJSON("http://localhost:3000/users", function (data) {
    console.log(data);
    users = data;                      // storing a working copy in users array too

    // get users and add to table.  Use "tbody" id.
    // ???
    // ???
    // ???
		$.each(users, function(i, value){
			$(`#tbody`).append(
				`<tr>
				<td>${value.rank}</td>
        <td>${value.name} [${value.username}]</td>
        <td>${value.email}</td>
        <td>${value.city}</td>
        <td>${value.company}</td>
				</tr>`
			)
			});

  });




  // rank handler
  $("#rank").change(function () {
    console.log($("#rank").val());    // this shows how to get the value from slider
    $("#rankValue").text($("#rank").val())
    $("#tbody").empty();
    for(var i=0;i<users.length;i++)
    {
      console.log(users[i]);
      if(users[i].rank<=$("#rank").val())
        {
          $(`#tbody`).append(
            `<tr>
            <td>${users[i].rank}</td>
            <td>${users[i].name} [${users[i].username}]</td>
            <td>${users[i].email}</td>
            <td>${users[i].city}</td>
            <td>${users[i].company}</td>
            </tr>`
          )   
        }
    }
  });
});
