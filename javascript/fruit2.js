window.onload = function()
{
    var myselect = document.getElementById("myselect");
    var h1 = document.getElementById("heading");
    myselect.onchange = function()
	{
		var span = document.getElementById("span1");
        span.innerHTML=myselect.value;
	}
    h1.onmouseover = function()
	{
		var h1 = document.getElementById("heading");
            h1.setAttribute("style","color:blue");
	}
    h1.onmouseout = function()
	{
		var h1 = document.getElementById("heading");
            h1.setAttribute("style","color:black");
	}
    
}