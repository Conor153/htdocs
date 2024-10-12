var xmlhttp;
var sorting =[];
var output;
window.onload = function () {
    nav();
    getAjaxData();
}

function getAjaxData() {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = showJSONData;
    xmlhttp.open("GET", "ajax/getTeams.php", true);
    xmlhttp.send();
}


function showJSONData() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var data = JSON.parse(xmlhttp.responseText);
        output = '<table id="mytable" border=1>';
        output += '<th></th>';
        output += '<th id="name" onclick="sortByName(sorting)">Names</th>';
        output += '<th id="pool" onclick="sortByPool(sorting)">Pools</th>';
        
        sorting = data.teams;
        for (var i = 0; i < data.teams.length; i++) {
            output += `<tr>`;
            output += `<td><img src="icons/${data.teams[i].id}.png"></td>`;
            output += `<td>${data.teams[i].name}</td>`;
            output += `<td>${data.teams[i].pool}</td>`;
            output += `</tr>`;
        }


        output += '</table>';
        document.getElementById("myDiv").innerHTML = output;
    }
}
function sortByName() {
    sorting.sort(function (a, b) {
        var team1 = a.name;
        var team2 = b.name;
        if(team1<team2)
        {
            return -1;
        }
        else if(team1>team2)
        {
            return 1;
        }
        else
        {
            return 0;
        }
            
    });
    updateTable();
}

function sortByPool() {
    sorting.sort(function (a, b) {
        var team1 = a.pool;
        var team2 = b.pool;
        if(team1<team2)
        {
            return -1;
        }
        else if(team1>team2)
        {
            return 1;
        }
        else
        {
            return 0;
        }
            
    });
    updateTable();
}

function updateTable() {

    output = "";
    output += '<table id="mytable" border=1>';
    output += '<th></th>';
    output += '<th id="name" onclick="sortByName()">Names</th>';
    output += '<th id="pool" onclick="sortByPool()">Pools</th>';

    for (var i = 0; i < sorting.length; i++) {
        output += `<tr>`;
        output += `<td><img src="icons/${sorting[i].id}.png"></td>`;
        output += `<td>${sorting[i].name}</td>`;
        output += `<td>${sorting[i].pool}</td>`;
        output += `</tr>`;
    }

    output += '</table>';
    document.getElementById("myDiv").innerHTML = output;
}
function teamsLogin(value) {
    setLogin(value);
}