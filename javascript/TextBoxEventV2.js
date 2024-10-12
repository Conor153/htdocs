window.onload = function()
{
	var mytextbox = document.getElementById("textbox"); 

	mytextbox.onchange = function()
	{
		console.log("keyup");
		console.log(mytextbox.value);
	}
}



