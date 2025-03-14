$(`document`).ready(function () {
	nav();
	footer();
    getJsonData();
});

function getJsonData() {
	$.getJSON(`http://localhost:3000/candidates`, function(data){
		console.log(data);
		$.each(data, function(i, value){
			const candidateImageFile = value.candidate_name.split(" ");
			$(`#tbody`).append(
				`<tr>
				//Need to split candidate name at the space and add in underscore
				<td><img src="images/${candidateImageFile[0]}_${candidateImageFile[1]}.jpg">${value.candidate_name}</td>
				<td><img src="images/${value.candidate_party}.png">${value.candidate_party}</td>
				</tr>`
			)
			});
	});
	

} 