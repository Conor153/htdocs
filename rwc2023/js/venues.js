var xmlhttp;

window.onload=function()
{
    nav();
    getAjaxData();
    
}
function getAjaxData()
{
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = showJSONData;
    xmlhttp.open("GET", "ajax/getVenues.php", true);
    xmlhttp.send();
}
function showJSONData() 
{
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
        var data = JSON.parse(xmlhttp.responseText);
        var output = '<table border=1>';
        output += '<td></td>'; 
        output += '<td>Name</td>';           
        for (var i = 0; i < data.venues.length; i++) 
        {
            
            output += `<tr>`;
            output += `<td>${i+1}</td>`;
            output += `<td>${data.venues[i].name}</td>`;	    
            output += `</tr>`;
            
        }

        output += '</table>';
        document.getElementById("myDiv").innerHTML = output;    
    }
}   
function venuesLogin(value) {
    setLogin(value);
}