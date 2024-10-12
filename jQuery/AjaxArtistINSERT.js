$("document").ready(function() {
	
	$.post("http://localhost:8080/getAlbums.php", {"artist_id" : "3"}, function(data){
		console.log(data);
		$.each(data.albums, function(index, value) {	
			$("#myDiv").append(`${value.album_name} <br>`);
		});
	  }, "json");




});

function insertData() {
	
}

