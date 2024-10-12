window.onload = function()
{
    
    var mybutton = document.getElementById("mybutton");
    var p = document.getElementsByTagName("p");

    mybutton.onclick = function()
	{
	    for(var i=0; i<p.length; i++)
	        p[i].setAttribute("style","color:red");
	}
    
}