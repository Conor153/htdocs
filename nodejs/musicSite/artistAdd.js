$(`document`).ready(function () {
    $.getJSON("http://localhost:3000/?page=artist", function(data){
		console.log(data);	
	});	
    $("#add").click(function (){

        var artist_name = $("#artist_name").val();
        var artist_id = $("#artist_id").val();
        alert("We got here");
    
        console.log(artist_name);
        console.log(artist_id);
        $.post(`http://localhost:3000/?page=artistAdd&artist_id=${artist_id}&artist_name=${artist_name}`);

    });
   
});