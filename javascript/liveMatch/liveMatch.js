window.onload = function()
{
    var divOutput = "";
	
	var post = document.getElementById("post"); 
	post.onclick = function()
	{
		var output = document.getElementById("output");
		var minute = document.getElementById("minute");
		// var img = document.getElementById("img");
		var shotoutcome = document.getElementById("shotoutcome");
		var comment = document.getElementById("comment");
		//output.innerHTML = minute.value;	

		// add to div
		
		divOutput = `<div>
		<span style="vertical-align:top">${minute.value} </span>
		<span> <img src="images/${shotoutcome.value}.png"></span>
		<span>${comment.value}</span>
		</div><hr>`;
		output.innerHTML  = output.innerHTML + divOutput;
		
	}
}