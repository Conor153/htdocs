var xmlhttp; 
var company = 'all';  // use to get users by company

window.onload=function(){
    getAjaxData();
}

function getAjaxData()
{
  xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange = showUserData;
  xmlhttp.open("GET", "ajax/getUsers.php", true);
  xmlhttp.send();
}
function showUserData()
{
  var companies2 = document.getElementById("companies")
  var companies = document.getElementById("companies").value;
  var newElement = document.createElement("option");

  if (xmlhttp.readyState==4 && xmlhttp.status==200)
  {
    var data = JSON.parse(xmlhttp.responseText);
    var output = `<table>`;
      for(var j=0; j<4; j++)
  {
      var newOption = document.createTextNode(${data.users[i].company});
      newElement.appendChild(newOption);
      companies2.appendChild(newElement);
  }
    for (var i = 0; i < data.users.length; i++) {
        output += `<tr>
        <td>${data.users[i].id}</td>
        <td>${data.users[i].name+" ["+data.users[i].username+"]"}</td>
        <td>${data.users[i].email}</td>
        <td>${data.users[i].city}</td>
        <td>${data.users[i].company}</td>
        <tr>
        `;
    }
    output += `</table`;
    document.getElementById("tbody").innerHTML = output;
  }
}
