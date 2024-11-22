$(`document`).ready(function () {
	nav();
	footer();
    getJsonData();
});

function getJsonData() {
	$.getJSON(`http://localhost:3000/candidates`, function(data){
		console.log(data);
		$(`#tbody`).append(
            `<tr>
            
            
            </tr>`



        )

	});	

} 