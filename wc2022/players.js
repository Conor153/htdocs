$(`document`).ready(function() {
    getPlayerData();  //Function to display player
	getSelectData();  //Function to get the teams in the dropdown box
    //If the dropdown box changes get the data with the same team ID
	$(`#teams`).change(function() {
		var teamId = $(this).val(); //Get the value of the drop down box
		$(`#tbody`).empty();//Clear the current table
		//Post method to getPlayersByTeam.php with the dropdown value
		//and to the variable ID in the php file
		$.post(`http://localhost/wc2022/getPlayersByTeam.php`,{ID:teamId},function(data){
		//Print out the table with the data collected
		$.each(data.players, function(index, player) {
			$(`#tbody`).append(`<tr>
			<td><img src=logos/${player.teamID}.webp></img></td>
			<td>${player.name} (${player.squadNumber})</td>
			<td>${player.caps}</td>
			<td>${player.goals}</td>
			<td>${player.club}</td>
			<td><button id="button" class="editButton btn btn-primary" type="button" value="${player.ID}">Edit</button></td></tr>`);
		}); 
		$(".editButton").click(function(e){
			// alert(e.target.value);
			let ID = e.target.value;
	
			localStorage.setItem("ID",ID);
			location.replace("http://localhost/wc2022/editPlayer.html");
	
		  });

	  }, `json`);
	});
});




function getPlayerData() {
    //Get the data from the getPlayers,php
	$.ajax({
		url: `http://localhost/wc2022/getPlayers.php`,
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
			<td><img src=logos/${player.teamID}.webp></img></td>
			<td>${player.name} (${player.squadNumber})</td>
			<td>${player.caps}</td>
			<td>${player.goals}</td>
			<td>${player.club}</td>
			<td><button class="editButton btn btn-primary" value="${player.ID}" type="button">Edit</button></td></tr>`);
	  });

	  $(".editButton").click(function(e){
		// alert(e.target.value);
		let ID = e.target.value;

		localStorage.setItem("ID",ID);
		location.replace("http://localhost/wc2022/editPlayer.html");

	  });
	}
	function errorFunc(xhr,status,strError) {
		$(`#myDiv`).text(`There was an error!`);
	}
} 



function getSelectData() {
    //Get the teams from the getTeams.php
	$.ajax({
		url: `http://localhost/wc2022/getTeams.php`,
		cache: false,
		type: `GET`,
		dataType: `json`,       // text, json, xml
		success: successFunc,
		error: errorFunc
	});
	//Add them to the drop down with their value being the teamID
	function successFunc(data) {	
	  $.each(data.teams, function(index, team) {
        $(`#teams`).append(`<option value=${team.ID}>${team.name}</option>`);
      });
	}
    
	function errorFunc(xhr,status,strError) {
		$(`#myDiv`).text(`There was an error!`);
	}
}
