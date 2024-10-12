$(`document`).ready(function() {
    nav();
    $(".getButton").click(function(e){
		// alert(e.target.value);
		let link = e.target.value;
        getJsonData(link);
	  });
});

function getJsonData(link) {
	$.ajax({
		url: `http://localhost/a2/${link}`,
		cache: false,
		type: `GET`,
		dataType: `json`,       
		success: successFunc,
	});
	//Print the data into the table
	function successFunc(data) 
    {	
        $(`#jsonOutput`).text(data)
	};

} 