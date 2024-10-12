var xmlhttp;

window.onload=function(){
  getAjaxData();
}

function getAjaxData()
{
  xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange = showJSONData;
  xmlhttp.open("GET", "clubs.json", true);
  xmlhttp.send();
}

function showJSONData()
{
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
  {
    var data = JSON.parse(xmlhttp.responseText);
    var output = `<ul>`;
    for (var i = 0; i < data.clubs.length; i++) {
        output += `<li>${data.clubs[i].name+" ("+data.clubs[i].ground+")"}</li>`;
    }
    output += `</ul>`;
    document.getElementById("myDiv").innerHTML = output;
  }
}
