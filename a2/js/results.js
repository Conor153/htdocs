var currentRound = 1;
$(`document`).ready(function() {
    nav();
    getResults(currentRound);


    $("#next").click(function()
    {
        Change($("#next").val());
    });
    $("#previous").click(function()
    {
        Change($("#previous").val());
    });

    $("#name").keyup(function()
    {
        Filter($("#name").val());
    });


});

function getResults(currentRound) {
	$.ajax({
		url: `http://localhost/a2/ajax/getResultsByRound.php?round=${currentRound}`,
		cache: false,
		type: `GET`,
		dataType: `json`,       
		success: successFunc,
	});

	//Print the data into the table
	function successFunc(data) 
    {	
        $("#tbody").empty();
        $.each(data.results, function(index, results) {
            $(`#tbody`).append(`<tr><td>${results.date}</td>
            <td>${results.round}</td>
            <td><img src=logos/${results.team1}.png></img> ${results.team1}</td>
            <td>${results.team1Score}</td>
            <td>${results.team2Score}</td>
            <td><img src=logos/${results.team2}.png></img> ${results.team2}</td>
            <td>D${results.division} Rd${results.round}</td>
            </tr>`);
          });
	};

} 
function Change(value) 
{
    value = Number(value);
    currentRound = value+currentRound;
    if(currentRound == 8)
        currentRound = 1;
    if(currentRound == 0)
        currentRound = 7;

    $("#previous").text(`< < Round ${currentRound-1}`);
    $("#next").text(`Round ${currentRound+1} > >`);
    
    if(currentRound == 7)
        $("#next").text(`Round 1 > >`);
    
    if(currentRound == 1)
        $("#previous").text(`< < Round 7`);

    $("#currentRound").text(` Round ${currentRound} `);
    getResults(currentRound);
} 

function Filter(value) 
{
    console.log(value)
    $.getJSON(`ajax/getResultsByRound.php?round=${currentRound}`,function(teams)
    {
        console.log(teams.results.length);
        teams = teams.results.filter(function(result)        
        {
            console.log(`${result.team1}, ${result.team2} `);
            return result.team1.includes(value) || result.team2.includes(value);
        });
        console.log(teams);

        $("#tbody").empty();
        $.each(teams, function(index, result) {
            $(`#tbody`).append(`<tr><td>${result.date}</td>
            <td>${result.round}</td>
            <td><img src=logos/${result.team1}.png></img> ${result.team1}</td>
            <td>${result.team1Score}</td>
            <td>${result.team1Score}</td>
            <td><img src=logos/${result.team2}.png></img> ${result.team2}</td>
            <td>D${result.division} Rd${result.round}</td>
            </tr>`);
          });
    });
} 