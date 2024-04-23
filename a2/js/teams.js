$(`document`).ready(function() {
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
	  $.each(data.teams, function(index, team) {
        $(`#tbody`).append(`<tr><td><img src=logos/${team.ID}.webp></img></td>
		<td>`+team.name+`</td></tr>`);
      });
	}

	function errorFunc(xhr,status,strError) {
		$(`#myDiv`).text(`There was an error!`);
	}
}