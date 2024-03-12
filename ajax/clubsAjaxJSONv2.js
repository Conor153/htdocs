var xmlhttp;

window.onload=function()
{
    getAjaxData();
}

function getAjaxData()
{
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = showJSONData;
    xmlhttp.open("GET", "getClubs.php", true);
    xmlhttp.send();
}
function showJSONData() 
{
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
        var data = JSON.parse(xmlhttp.responseText);
        var output = '<table border=1>';                     
        for (var i = 0; i < data.clubs.length; i++) 
        {
            output += `<tr>`;
            output += `<td>${data.clubs[i].name}</td>`;	    
            output += `<td>${data.clubs[i].ground}</td>`;	    
            output += `</tr>`;
        }
        output += '</table>';
        document.getElementById("myDiv").innerHTML = output;    	  
    }
}