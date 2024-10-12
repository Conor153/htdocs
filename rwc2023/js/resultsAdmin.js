var xmlhttp;
var xmlhttp3;
var loggedIn = true;
window.onload=function()
{
    nav();
    getAjaxData();
    
}
function getAjaxData()
{
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = showJSONData;
    xmlhttp.open("GET", `ajax/getResults.php`, true);
    xmlhttp.send();
}
function showJSONData() 
{
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
        var data = JSON.parse(xmlhttp.responseText);

        
        // output = `<form id="formId" method="post" action="updateResults.php">`
        var output = '<table border=1>'; 
        output += '<th>Date</th>';
        output += '<th>Stage</th>';
        output += '<th>Team</th>';
        output += '<th></th>';
        output += '<th></th>';
        output += '<th>Team</th>';
        output += '<th>Venue</th>';
        output += '<th></th>';     
             
        for (var i = 0; i < data.results.length; i++) 
        {
            
                output += `<tr>`;
                output += `<td>${data.results[i].date+" "+data.results[i].time}</td>`;
                output += `<td>${data.results[i].stage}</td>`;
                output += `<td><img src="icons/${data.results[i].team1_id}.png">${data.results[i].team1_name}</td>`;
                output += `<td><input id="team1_score${data.results[i].match_id}" name="team1Score" value="${data.results[i].team1_score}"></input></td>`;
                output += `<td><input id="team2_score${data.results[i].match_id}" name="team2Score" value="${data.results[i].team2_score}"></input></td>`;
                output += `<td>${data.results[i].team2_name}<img src="icons/${data.results[i].team2_id}.png"></td>`;
                output += `<td>${data.results[i].venue_name}</td>`;   
                output += `<td><button class="updateBtns" id="update${i}" value="${data.results[i].match_id}">Update</button></td>`;
        }

        output += '</table>';
        // output += `</form>`;
        document.getElementById("myDiv").innerHTML = output;    
        
        
        var buttons  = document.getElementsByClassName("updateBtns");
        for(var i=0;i<buttons.length;i++)        
            buttons[i].onclick = function(event){
                var match_id = event.target.value;
                var team1_score = document.getElementById(`team1_score${match_id}`).value;
                var team2_score = document.getElementById(`team2_score${match_id}`).value;
                xmlhttp3 = new XMLHttpRequest();
                xmlhttp3.open("GET", `ajax/updateResult.php?match_id=${match_id}&team1_score=${team1_score}&team2_score=${team2_score}`, true);
                xmlhttp3.send();
            }


    }
}
function resultsAdminLogin(value) {
    loggedIn = value;
}