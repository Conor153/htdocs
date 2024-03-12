window.onload = function()
{
    var color = document.getElementById("colourCombo")
    color.onchange = function()
	{
		var colour = document.getElementById("colour");
		
        colour.innerHTML=color.value;
	}

	var button = document.getElementById("addCl");
	var colourBox = document.getElementById("colourbox");
	button.onclick = function()
	{
		addCl(colourBox.value);
	}
    

}
function addCl(colorText)
{
    var Option = document.createElement("OPTION");
	var myColour = document.createTextNode(colorText);
	Option.appendChild(myColour);

	var mySelect = document.getElementById("colourCombo"); 
	mySelect.appendChild(Option);

}	