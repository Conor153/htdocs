$("document").ready(function(){

	// $("#findButton").click(function()
	// {
	// 	$(`#tbody`).empty();
	// 	var player=_.find(players, findBravo);
	// });

	$("#name").keyup(function () 
	{
		$(`#tbody`).empty();
		var player=_.find(players, findBravo);
    });


	function findBravo(element) {
		if(element.Name.includes($("#name").val()))
		{
			$(`#tbody`).append(
				`
					<tr style="border: 1px solid black;"><td style="border: 1px solid black;">${element.Name}</td></tr>
				`
			)
		}
		   
	 }
});
