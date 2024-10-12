$("document").ready(function() {

	$.post("http://localhost/getAlbums.php", {"artist_id" : "3"}, function(data){
		console.log(data);
		$.each(data.albums, function(index, value) {	
			$("#myDiv").append(`${value.album_name} <br>`);
		});
	  }, "json");
  
});



