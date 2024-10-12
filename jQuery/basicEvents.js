$("document").ready(function(){

	console.log("Event Handling");

	

// $("p").click(printAlert);

// function printAlert()
// {
//   alert("clicked a paragraph");
// }

////////////////////////

// $("p:eq(0)").click(
// 	function ()
// 	{
// 		$(this).text("Clicked on paragraph 1");
// 	}

// );

//////////////////////////////////

// $("ul").click(
// 	function ()
// 	{
// 		$(this).css("color", "blue");
// 	}

// );

////////////////////////////////

// $("p:last").hover(
// 	function ()
// 	{
// 		$(this).css("color", "red");
// 	}
// 	,
// 	function ()
// 	{
// 		$(this).css("color", "black");
// 	}


// );

/////////////////////////////////

// $("button").click(
// 	function ()
// 	{
// 		console.log("Button clicked");
// 	}

// );

/////////////////////////////////

// $("select").change(
// 	function ()
// 	{
// 		$("span").text(this.value);
// 	}

// );

////////////////////////////////

$("#addfruit").click(
	function ()
	{
		var fruit = $("#newfruit").val();

		$("select").append(`<option value="${fruit}">${fruit}</option>`);
			
	}

);



	
});