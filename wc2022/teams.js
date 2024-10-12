$(`document`).ready(function() {
    getData();
});

function getData() {

	$.ajax({
		url: `http://localhost/wc2022/getTeams.php`,
		cache: false,
		type: `GET`,
		dataType: `json`,       // text, json, xml
		success: successFunc,
		error: errorFunc
	});

	function successFunc(data) {	
	  $.each(data.teams, function(index, team) {
        
        $(`#tbody`).append(`<tr><td><img src=logos/${team.ID}.webp></img></td>
		<td>`+team.name+`</td>
		<td>`+team.group+`</td></tr>`);
      });
	}

	function errorFunc(xhr,status,strError) {
		$(`#myDiv`).text(`There was an error!`);
	}
}