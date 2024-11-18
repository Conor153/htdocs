$("document").ready(function(){
	
	$.getJSON("http://localhost:3000/results/", function(data){
		console.log(data);
		$.each(data, function(i, value){
			$("#myDiv").append(value.rnd+"<br>");
		});	

	});	
	
});
