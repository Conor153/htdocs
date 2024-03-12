var xmlhttp;
var xmlhttp2;
window.onload=function()
{
    nav();
    var dropdown = '<select id="stat" onchange="getDropDownValue()">';
    dropdown += '<option value="points">Points</option>';
    dropdown += '<option value="tackles">Tackles</option>';
    dropdown +='</select>';
    dropdown +='<br>';
    document.getElementById("myStat").innerHTML = dropdown;
    getAjaxData();
    
     
}

function getDropDownValue()
{
    var stats = document.getElementById("stat").value;
    if(stats=="points")
    {
        getAjaxData();
    }

    else
    {
        getAjax2Data();
    }
}



function getAjaxData()
{
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = showPointsData;
    xmlhttp.open("GET", `ajax/getPoints.php`, true);
    xmlhttp.send();
}
function showPointsData() 
{
    if (xmlhttp.readyState==4 && xmlhttp.status==200) 
    {
        var data = JSON.parse(xmlhttp.responseText);
        var output = '<table border=1>'; 
        output += '<th>#</th>';
        output += '<th>Name</th>';
        output += '<th>Team</th>';
        output += '<th>Points</th>';
        for (var i = 0; i < data.points.length; i++) 
        {
            output += `<tr>`;
            output += `<td>${i+1}</td>`;
            if(data.points[i].team_name== "New Zealand")
            {

                output += `<td><a href="https://www.rugbyworldcup.com/2023/teams/new-zealand/player/${data.points[i].player_id}">${data.points[i].player_name}</a></td>`;
                
            }
            else if(data.points[i].team_name== "South Africa")
            {
                
                output += `<td><a href="https://www.rugbyworldcup.com/2023/teams/south-africa/player/${data.points[i].player_id}">${data.points[i].player_name}</a></td>`;
                
            }
            else
            {
                
                output += `<td><a href="https://www.rugbyworldcup.com/2023/teams/${data.points[i].team_name}/player/${data.points[i].player_id}">${data.points[i].player_name}</a></td>`;
            }
            output += `<td><img src="icons/${data.points[i].team_id}.png">${data.points[i].team_name}</td>`;
            output += `<td>${data.points[i].points}</td>`;
            output += `</tr>`; 
        }

        output += '</table>';
        document.getElementById("myDiv").innerHTML = output;
    
    }       
    
}
function getAjax2Data()
{
    xmlhttp2 = new XMLHttpRequest();
    xmlhttp2.onreadystatechange = showTacklesData;
    xmlhttp2.open("GET", `ajax/getTackles.php`, true);
    xmlhttp2.send();
}
function showTacklesData() 
{
    if (xmlhttp2.readyState==4 && xmlhttp2.status==200) 
    {
        var data2 = JSON.parse(xmlhttp2.responseText);
        var output = '<table border=1>'; 
        output += '<th>#</th>';
        output += '<th>Name</th>';
        output += '<th>Team</th>';
        output += '<th>Tackles</th>';
        for (var i = 0; i < data2.tackles.length; i++) 
        {
            output += `<tr>`;
            output += `<td>${i+1}</td>`;
            if(data2.tackles[i].team_name== "New Zealand")
            {

                output += `<td><a href="https://www.rugbyworldcup.com/2023/teams/new-zealand/player/${data2.tackles[i].player_id}">${data2.tackles[i].player_name}</a></td>`;
                
            }
            else if(data2.tackles[i].team_name== "South Africa")
            {
                
                output += `<td><a href="https://www.rugbyworldcup.com/2023/teams/south-africa/player/${data2.tackles[i].player_id}">${data2.tackles[i].player_name}</a></td>`;
                
            }
            else
            {
                
                output += `<td><a href="https://www.rugbyworldcup.com/2023/teams/${data2.tackles[i].team_name}/player/${data2.tackles[i].player_id}">${data2.tackles[i].player_name}</a></td>`;
            }
            output += `<td><img src="icons/${data2.tackles[i].team_id}.png">${data2.tackles[i].team_name}</td>`;
            output += `<td>${data2.tackles[i].tackles}</td>`;
            output += `</tr>`; 
        }

        output += '</table>';
        document.getElementById("myDiv").innerHTML = output;
    
    }       
    
}
function playerStatsLogin(value) {
    setLogin(value);
}