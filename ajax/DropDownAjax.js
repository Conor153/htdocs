var xmlhttp;  // reference to XMLHttpRequest object
window.onload=function(){
	document.getElementById("position").onchange=function()
	{
		getAjaxData();
	}	
	
}

function getAjaxData()
{	
	xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function (){
		showAjaxData();
	};
	// var filename;
	// if(document.getElementById("position").value == "goalkeepers")
	// {
	// 	filename="goalkeepers.txt";
	// }
	// if(document.getElementById("position").value == "defenders")
	// {
	// 	filename="defenders.txt";
	// }
	// if(document.getElementById("position").value == "midfielders")
	// {
	// 	filename="midfielders.txt";
	// }
	// if(document.getElementById("position").value == "forwards")
	// {
	// 	filename="forwards.txt";
	// }	
		xmlhttp.open("GET",`${document.getElementById("position").value}.txt`,true);
		xmlhttp.send();
		
}

function showAjaxData()
{
	if (xmlhttp.readyState==4 && xmlhttp.status==200)
	{
		document.getElementById("myDiv").innerHTML=xmlhttp.responseText;		
	}
}
