window.onload = function()
{
	var myselect = document.getElementById("myselect"); 

	myselect.onchange = function()
	{
		alert(myselect.value + " selected");
	}
}

