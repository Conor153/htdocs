$("document").ready(function(){
	$.getJSON("http://localhost:3000/?page=artist", function(data){
		console.log(data);
		$.each(data, function(i, value) {
            $("#tbody").append(`<tr>
                <td>${value.artist_id}</td>
                <td><input type="text" name="artist_name" id="artist_name${value.artist_id}" value="${value.artist_name}"></td>
                <td><button type="button" class="updateButton btn btn-primary" value="${value.artist_id}">Update</button></td>
            </tr>`);
        });	
		$(".updateButton").click(function (e) {
			alert("Hello");
			var artist_id = e.target.value;
			var artist_name = $(`#artist_name${artist_id}`).val();
        	
			$.post(`http://localhost:3000/?page=artistUpdate&artist_id=${artist_id}&artist_name=${artist_name}`);
		});
	});	
	

});
