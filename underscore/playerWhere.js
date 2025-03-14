$("document").ready(function(){

	$("#findButton").click(function() {
		// add code here to react to button click
		
		var details = new Object();
		details.Team = $(`#team`).val();
		details.Position = $(`#position`).val();
		console.log(details)
		console.log(details.Team)
		console.log(details.Position)
		// use findWhere() function here
		var player=_.findWhere(players, {Team:`${details.Team}`, Position:`${details.Position}`});

	});
});