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
    xmlhttp.open("GET", "ajax/getPlayers.php", true);
    xmlhttp.send();
}
function showJSONData() 
{
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
        var data = JSON.parse(xmlhttp.responseText);
        var output = '<table border=1>';
        output += '<th></th>'; 
        output += '<th>Name</th>';  
        output += '<th>Team</th>';
        output += '<th>Info</th>';         
        for (var i = 0; i < data.players.length; i++) 
        {
            
            output += `<tr>`;
            output += `<td><img src="icons/${data.players[i].id}.png"></td>`;
            output += `<td>${data.players[i].name}</td>`;
            output += `<td>${data.players[i].teamsname}</td>`;
            var nTeam = data.players[i].teamsname;
            if(nTeam == "New Zealand")
            {
                output += `<td><a href ="https://www.rugbyworldcup.com/2023/teams/new-zealand/player/${data.players[i].playerid}">Info</a></td>`;	    
            }
            if(nTeam == "South Africa")
            {
                output += `<td><a href ="https://www.rugbyworldcup.com/2023/teams/south-africa/player/${data.players[i].playerid}">Info</a></td>`;	    
            }
            if(nTeam != "New Zealand" && nTeam != "South Africa")
            {
                output += `<td><a href ="https://www.rugbyworldcup.com/2023/teams/${data.players[i].teamsname}/player/${data.players[i].playerid}">Info</a></td>`;	    
            }
                output += `</tr>`;
            
        }

        output += '</table>';
        document.getElementById("myDiv").innerHTML = output;    
    }
}
function playersLogin(value) {
    setLogin(value);
}