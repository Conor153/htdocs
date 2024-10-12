$("document").ready(function(){
	
	$.getJSON("http://localhost:3000/?page=artist", function(data){
		console.log(data);
		$.each(data, function(i, value){
			$("#artists").append(`<option value=${value.artist_id}>${value.artist_name}</option>`);
		});		
	});	


    $(`#artists`).change(function () {
		var artist_id = $(this).val();
		$(`#myDiv`).empty();
        $.getJSON(`http://localhost:3000/?page=albumFilter&artist_id=${artist_id}`, function(data){
		console.log(data);
		$.each(data, function(i, value){
			$("#myDiv").append(`<h3>${value.album_name}</h3>`);
		    });		
	    });		
	});
});