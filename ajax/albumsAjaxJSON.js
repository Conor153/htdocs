var xmlhttp;

window.onload=function(){
	document.getElementById('artists').onchange=function(){
        getAjaxData();
    }
}

function getAjaxData()
{	
	xmlhttp=new XMLHttpRequest();	
	xmlhttp.onreadystatechange = showJSONData;
	xmlhttp.open("GET", `getAlbums.php?artist_id=${document.getElementById('artists').value}`, true);
	xmlhttp.send();	
}

function showJSONData() 
{
	if (xmlhttp.readyState==4 && xmlhttp.status==200) {

		var data = JSON.parse(xmlhttp.responseText);

		var output = '<table border=1>';
		for (var i = 0; i < data.clubs.length; i++) 			
			output += `<tr><td>${data.clubs[i].album_id}</td><td>${data.clubs[i].album_name}</td></tr>`;		
		output += '</table>';

		document.getElementById("myDiv").innerHTML = output;
	}
}
