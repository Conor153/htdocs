var xmlhttp;
var xmlhttp2;
var stageselection;
window.onload=function()
{
    nav();
    getAjaxData2();
     
}
function getAjaxData2()
{
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = showJSONData;
    xmlhttp.open("GET", `ajax/getStage.php`, true);
    xmlhttp.send();
}
function showJSONData() 
{
    if (xmlhttp.readyState==4 && xmlhttp.status==200) 
    {
        var data2 = JSON.parse(xmlhttp.responseText);
            
        var dropdown = '<select id="stage" onchange="getAjaxData()">';
        dropdown += '<option value="*">All</option>';
        for(var i = 0; i < data2.stage.length; i++)
        {
            dropdown += `<option value="${data2.stage[i].stage}">${data2.stage[i].stage}</option>`;
        }
        dropdown +='</select>';
        dropdown +='<br>';
        document.getElementById("dropDown").innerHTML = dropdown;
        getAjaxData();
    }       
}

function getAjaxData()
{
    xmlhttp2 = new XMLHttpRequest();
    xmlhttp2.onreadystatechange = showJSONData2;
    xmlhttp2.open("GET", `ajax/getResults.php`, true);
    xmlhttp2.send();
}

function showJSONData2()
{
    if (xmlhttp2.readyState==4 && xmlhttp2.status==200)
    {
        var data = JSON.parse(xmlhttp2.responseText);
        stageselection = document.getElementById("stage");
        var output = '<table border=1>'; 
        output += '<td>Date</td>';
        output += '<td>Stage</td>';
        output += '<td>Home Team</td>';
        output += '<td></td>';
        output += '<td>Away Team</td>';
        output += '<td>Venue</td>';               
        for (var i = 0; i < data.results.length; i++) 
        {
            if(data.results[i].stage==stageselection.value)
            {
                    output += `<tr>`;
                    output += `<td>${data.results[i].date+" "+data.results[i].time}</td>`;
                    output += `<td>${data.results[i].stage}</td>`;
                    output += `<td><img src="icons/${data.results[i].team1_id}.png">${data.results[i].team1_name}</td>`;
                    output += `<td>${data.results[i].team1_score+"-"+data.results[i].team2_score}</td>`;
                    output += `<td>${data.results[i].team2_name}<img src="icons/${data.results[i].team2_id}.png"></td>`;
                    output += `<td>${data.results[i].venue_name}</td>`;
            }
            if("*"==stageselection.value)
            {
                    output += `<tr>`;
                    output += `<td>${data.results[i].date+" "+data.results[i].time}</td>`;
                    output += `<td>${data.results[i].stage}</td>`;
                    output += `<td><img src="icons/${data.results[i].team1_id}.png">${data.results[i].team1_name}</td>`;
                    output += `<td>${data.results[i].team1_score+"-"+data.results[i].team2_score}</td>`;
                    output += `<td>${data.results[i].team2_name}<img src="icons/${data.results[i].team2_id}.png"></td>`;
                    output += `<td>${data.results[i].venue_name}</td>`;
            }
        }

        output += '</table>';
        document.getElementById("myDiv").innerHTML = output;
    }
}
function resulstLogin(value) {
    setLogin(value);
}