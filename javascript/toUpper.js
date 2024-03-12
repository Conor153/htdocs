window.onload = function()
{
    var mybutton = document.getElementById("mybutton"); 

	mybutton.onclick = function()
	{
        var box1 = document.getElementById("box1");
        var box2 = document.getElementById("box2");
        box2.value = box1.value.toUpperCase();
	}
    
}