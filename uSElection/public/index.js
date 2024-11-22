$(`document`).ready(function () {
	nav();
	footer();
	$(".getButton").click(function (e) {
		let link = e.target.value;
		console.log(link);
		getJsonData(link);
	});
});

function getJsonData(link) {
	$.getJSON(`http://localhost:3000${link}/`, function(data){
		console.log(data);
		$(`#jsonOutput`).val(JSON.stringify(data, null, 3));

	});	

} 