var xmlhttp; 

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
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
  {
    var data = JSON.parse(xmlhttp.responseText);
    var output = `<table>`;
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