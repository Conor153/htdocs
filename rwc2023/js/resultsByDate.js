var xmlhttp;
var d = new Date("2023-9-8");
var dFormated = `${d.getFullYear()}-0${d.getMonth()+1}-0${d.getDate()}`;
var isMatchToday=true;
var games =[];
window.onload=function()
{
    nav();//Call nav
    getAjaxData();//Call Ajax data
    
}
function getAjaxData()
{
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = showJSONData;
    xmlhttp.open("GET", `ajax/getResults.php`, true);
    xmlhttp.send();
    //Get ajax data from getResults.php
}
function showJSONData() 
{
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
        var data = JSON.parse(xmlhttp.responseText);
        //Format the date to a string
        dFormated = `${d.getFullYear()}-0${d.getMonth()+1}-0${d.getDate()}`;
        //Add the formated date along with the buttons to cDate div
        var cDate = dFormated;
        cDate += '<br>';
        cDate += '<br>';
        cDate += '<br>';
        //Previous button to change the date backwards
        cDate += '<input value="Previous" type="button" onclick="changeDate(false)"/>';
        //Next date button used to change the date forward
        cDate += '<input value="Next" type="button" onclick="changeDate(true)"/>';
        document.getElementById("myDate").innerHTML = cDate;
        //Assign the data from the results.php into games arraylist
        games=data.results;

        //Print the table heading
        var output = '<table border=1>';
        output += '<th>Date</th>'; 
        output += '<th>Stage</th>';
        output += '<th></th>';
        output += '<th>Home Team</th>';
        output += '<th>Score</th>';
        output += '<th>Away Team</th>';
        output += '<th></th>';
        output += '<th>Venue</th>';    

        //For loop to print all data with same date played
        for (var i = 0; i < data.results.length; i++) 
        {
            //get the date from the data
            var matchDate = `${data.results[i].date}`;
            //Convert this date to a string

            //Used to test that strings are similar
            // console.log(matchDate.toString());
            // console.log(dFormated);

            //If the dates are smilar print out the data
            if(dFormated == matchDate.toString())
            {
                output += `<tr>`;
                output += `<td>${data.results[i].date+" "+data.results[i].time}</td>`;
                output += `<td>${data.results[i].stage}</td>`;
                output += `<td><img src="icons/${data.results[i].team1_id}.png"></td>`;
                output += `<td>${data.results[i].team1_name}</td>`;
                output += `<td>${data.results[i].team1_score+"-"+data.results[i].team2_score}</td>`;
                output += `<td>${data.results[i].team2_name}</td>`;
                output += `<td><img src="icons/${data.results[i].team2_id}.png"></td>`;
                output += `<td>${data.results[i].venue_name}</td>`;
                output += `</tr>`;
            
            }
        }
        output += '</table>';
        //appened it to myDiv in html
        document.getElementById("myDiv").innerHTML = output;    
    }
}
//Use 1 function to change the date rather than 1 for each
function changeDate(status)
{
    //Check whether to add to date or take away
    if(status)//If true add to date
    {
        d.setDate(d.getDate()+1);
    }
    else//Else take away or go backwards in date
    {
        d.setDate(d.getDate()-1);
    }
    //This is used to format the dates properly
    //Month is <9 and the date <10. Add in 0 to String
    //8 is used for september. 0 for January.
    if(d.getMonth()<9 && d.getDate()<10)
    {
        var dFormated = `${d.getFullYear()}-0${d.getMonth()+1}-0${d.getDate()}`;
        //console.log(dFormated);
    }
    //Month is <9 and the date 10 or greater. Add in 0 for months to String
    else if(d.getMonth()<9 && d.getDate()>=10)
    {
        var dFormated = `${d.getFullYear()}-0${d.getMonth()+1}-${d.getDate()}`;
        //console.log(dFormated);
    }
    //If month is >9 and the date <10 add 0 for date to string
    else if(d.getMonth()>=9 && d.getDate()<10)
    {
        var dFormated = `${d.getFullYear()}-${d.getMonth()+1}-0${d.getDate()}`;
        //console.log(dFormated);
    }
    //If month is >9 and Date >10. No 0 necessary for string
    else
    {
        var dFormated = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
        //console.log(dFormated);
    }
    showResultsToday(dFormated);

}
//This function is used to overwrite the data in that table
function showResultsToday(dFormated)
{
        var output ="";
        output += '<table border=1>';
        output += '<th>Date</th>'; 
        output += '<th>Stage</th>';
        output += '<th></th>';
        output += '<th>Home Team</th>';
        output += '<th>Score</th>';
        output += '<th>Away Team</th>';
        output += '<th></th>';
        output += '<th>Venue</th>';    
        //This variable is used to determine if there is a match or not
        isMatchToday=true;
        for (var i = 0; i < games.length; i++) 
        {
            var matchDate = `${games[i].date}`;
            var cDate = dFormated;
            cDate += '<br>'
            cDate += '<br>'
            cDate += '<br>'
            cDate += '<input value="Previous" type="button" onclick="changeDate(false)"/>';
            cDate += '<input value="Next" type="button" onclick="changeDate(true)"/>';
            document.getElementById("myDate").innerHTML = cDate;
            
            if(dFormated == matchDate.toString())
            {
                //If data is to be printed set variable to false
                isMatchToday=false;
                output += `<tr>`;
                output += `<td>${games[i].date+" "+games[i].time}</td>`;
                output += `<td>${games[i].stage}</td>`;
                output += `<td><img src="icons/${games[i].team1_id}.png"></td>`;
                output += `<td>${games[i].team1_name}</td>`;
                output += `<td>${games[i].team1_score+"-"+games[i].team2_score}</td>`;
                output += `<td>${games[i].team2_name}</td>`;
                output += `<td><img src="icons/${games[i].team2_id}.png"></td>`;
                output += `<td>${games[i].venue_name}</td>`;
                output += `</tr>`;
            
            }
        }
        //If true there is no matches
        //Print that there is no matches
        if(isMatchToday)
        {
            output += '<tr>';
            output += '<td colspan="8">No Matches</td>';
            output += '</tr>';
        }
        
        //Overwrite the table
        output += '</table>';
        document.getElementById("myDiv").innerHTML = output;    
}
function resulstByDateLogin(value) {
    setLogin(value);
}