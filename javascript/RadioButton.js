window.onload = function()
{
    var other = document.getElementById("other"); 
    var print = false;
	other.onclick = function()
	{
        if(print == false)
        {
            print = true;
            var textbox = document.createElement("input");
            textbox.setAttribute("type", "text")
            document.body.appendChild(textbox);
        }
        
	}
    
    
}