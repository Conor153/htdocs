$(`document`).ready(function () {
	nav();
	footer();
    getJsonData();
});

function getJsonData() {
	$.getJSON(`http://localhost:3000/candidates`, function(data){
		console.log(data);
		var firstName = "";
		var lastName = "";
		$.each(data, function(i, value){
			$(`#tbody`).append(
				`<tr>
				//Need to split candidate name at the space and add in underscore
				${value.candidate_name}.split(" ");
				<td><img src="usElection/images/${firstName}_${lastName}.png">${value.candidate_name}</td>
				<td><img src="usElection/images/${value.candidate_party}.png">${value.candidate_party}</td>
				</tr>`
			)
			});
	});	
	

} 