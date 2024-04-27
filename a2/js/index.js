$(`document`).ready(function () {
	nav();
	footer();
	$(".getButton").click(function (e) {
		let link = e.target.value;
		getJsonData(link);
	});
});

function getJsonData(link) {
	$.ajax({
		url: `http://localhost/a2/${link}`,
		cache: false,
		type: `GET`,
		dataType: `json`,
		success: successFunc,
	});

	//Print the data into the table
	function successFunc(data) {
		$(`#jsonOutput`).val(JSON.stringify(data, null, 3));
	};

} 