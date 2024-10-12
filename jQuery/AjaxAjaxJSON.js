$("document").ready(function() {
  getData();
});

function getData() {

	$.ajax({
		url: "http://localhost/jQuery/getArtistsJSON.php",
		cache: false,
		type: "GET",
		dataType: "json",       // text, json, xml
		success: successFunc,
		error: errorFunc
	});
	
	function successFunc(data) {	
		console.log("we got a success")
	  $.each(data.artists, function(index, artist) {
        $("#myDiv").append("<tr><td>"+artist.artist_name+"</td></tr>");
      });
	}

	function errorFunc(xhr,status,strError) {
		$("#myDiv").text("There was an error!");
	}
}

