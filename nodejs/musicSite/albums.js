$("document").ready(function(){
	
	$.getJSON("http://localhost:3000/?page=album", function(data){
		console.log(data);
		$.each(data, function(i, value){
			$("#myDiv").append(value.album_name+"<br>");
		});		
	});	

});