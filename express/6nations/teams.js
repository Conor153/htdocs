var selection;//Global variable to sore data from teams tables
$("document").ready(function(){
	
	$.getJSON("http://localhost:3000/teams/", function(data){
		selection=data.teams;
		console.log(data.teams);
		$.each(data.teams, function(i, value){
			$("#teams").append(`<option value=${value.id}>${value.name}</option>`);
		});		
	});

	$(`#teams`).change(function () {
		var id = $(this).val();
		$("#tbody").empty();
        $.getJSON(`http://localhost:3000/results/team/${id}`, function(data){
		$.each(data, function(i, value){
			let index = value.HomeTeamID-1;//Home teams index for selection data
			let index2 = value.AwayTeamID-1;//AwayTeams index for selection data
			$("#tbody").append(`<tr>
			

                <td>${value.HomeTeamID}</td>
				<td>${selection[index].name}</td>
				<td>${value.HomeTeamScore}</td>
				<td>-</td>
                <td>${value.AwayTeamScore}</td>
				<td>${selection[index2].name}</td>
				<td>${value.AwayTeamID}</td>
				<td>${value.date}</td>
				<td>${value.venue}</td>
            	</tr>`);
			
		    });
	    });		
	});
});	
