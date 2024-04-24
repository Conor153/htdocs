$(`document`).ready(function() {
    nav();
    getPlayerData();  //Function to display player
	getSelectData();  //Function to get the teams in the dropdown box
    //If the dropdown box changes get the data with the same team ID
	$(`#teams`).change(function() {
		var teamId = $(this).val(); //Get the value of the drop down box
		console.log(teamId);
        $(`#tbody`).empty();//Clear the current table
		//Post method to getPlayersByTeam.php with the dropdown value
		//and to the variable ID in the php file
		$.post(`http://localhost/a2/ajax/getPlayersByTeam.php`,{ID:teamId},function(data){
		//Print out the table with the data collected
		$.each(data.players, function(index, player) {
            $(`#tbody`).append(`<tr>
                <td></td>
                <td>${player.name} (${player.squadNumber})</td>
                <td>${player.age}</td>
                <td>${player.matches}</td></tr>`);
          });
	  }, `json`);
	});
});

function getPlayerData() {
    //Get the data from the getPlayers,php
	$.ajax({
		url: `http://localhost/a2/ajax/getPlayers.php`,
		cache: false,
		type: `GET`,
		dataType: `json`,       
		success: successFunc,
		error: errorFunc
	});
	//Print the data into the table
	function successFunc(data) {	
	  $.each(data.players, function(index, player) {
        $(`#tbody`).append(`<tr>
            <td>${player.teamID}</td>
			<td>${player.name} (${player.squadNumber})</td>
			<td>${player.age}</td>
			<td>${player.matches}</td></tr>`);
	  });
	}
	function errorFunc(xhr,status,strError) {
		$(`#myDiv`).text(`There was an error!`);
	}
} 

function getSelectData() {
    //Get the teams from the getTeams.php
	$.ajax({
		url: `http://localhost/a2/ajax/getTeams.php`,
		cache: false,
		type: `GET`,
		dataType: `json`,       // text, json, xml
		success: successFunc,
		error: errorFunc
	});
	//Add them to the drop down with their value being the teamID
	function successFunc(data) {	
	  $.each(data.teams, function(index, team) {
        $(`#teams`).append(`<option value=${team.id}>${team.name}</option>`);
      });
	}
    
	function errorFunc(xhr,status,strError) {
		$(`#myDiv`).text(`There was an error!`);
	}
}
