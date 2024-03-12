var xmlhttp;

window.onload=function(){
  getAjaxData();
}

function getAjaxData()
{
  xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange = showJSONData;
  xmlhttp.open("GET", "matches.json", true);
  xmlhttp.send();
}


function showJSONData()
{
  if(xmlhttp.readyState==4 && xmlhttp.status==200)
  {		
    var data = JSON.parse(xmlhttp.responseText);
    var output = `<table>`;                     
    for(var i = 0; i < data.results.length; i++) 
    {
      output += `<tr>`;
      output += `<td>${data.results[i].hTeam+" ("+data.results[i].hTeamScore+"-"+data.results[i].aTeamScore+") "+data.results[i].aTeam}</td>`;
      output += `</tr>`;
      //output += `<li>${data.clubs[i].name+" ("+data.clubs[i].ground+")"}</li>`;
    }
    output += `</table>`;

    document.getElementById("myDiv").innerHTML = output;            
  }
}
