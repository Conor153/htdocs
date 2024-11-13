$("document").ready(function() {
	$("#send").click(function() {
		var name = $("#name").val();
		var message = $("#message").val();
		alert(name);
		alert(message);

		$.post("http://localhost:3000/message",
		{
			name: name,
			message: message
		});
	});

	setInterval(function(){
		$("#chat").empty();
		$.getJSON(`http://localhost:3000/get`, function(data){
			data.reverse();
			$.each(data, function(i, value){
				console.log(value.name)
				console.log(value.message)

				$("#chat").prepend(`
				<h2>${value.name}</h2>
				<h4>${value.message}</h4>
				<br>
				`);


			});
		});
	},5000)

});
// Initially just add the messages to the div when the Send button is pressed
	
	// Later post the message to the chatapp server
	// and get all the message and add to the div
	