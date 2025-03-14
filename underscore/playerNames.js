$("document").ready(function() {
	var totalPlayers;
		_.each(players, function(player, i)
		{
			totalPlayers = i++;
			$(`#data`).append(
				`
				<tr style="border: 1px solid black;"><td style="border: 1px solid black;">${player.Name}</td></tr>
				`
			)
		});	
		$(`h1`).text(`${totalPlayers} Players`)
	
});
