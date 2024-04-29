$(`document`).ready(function () {
	nav();
	footer();
	getData();
});

function getData() {

	$.ajax({
		url: `http://localhost/a2/ajax/getTeams.php`,
		cache: false,
		type: `GET`,
		dataType: `json`,       // text, json, xml
		success: successFunc,
		error: errorFunc
	});

	function successFunc(data) {
		$.each(data.teams, function (index, team) {
			$(`#tbody`).append(`<tr><td><img src=logos/${team.name}.png></img> ${team.name} (${team.name.substring(0, 3).toUpperCase()})</td>
		<td><a href=https://en.wikipedia.org/wiki/${team.name}_GAA>Info...</a></td></tr>`);
		});
	}

	function errorFunc(xhr, status, strError) {
		$(`#myDiv`).text(`There was an error!`);
	}
}