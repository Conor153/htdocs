var xmlhttp;  // reference to XMLHttpRequest object

window.onload=function(){
	document.getElementById('times').onchange=function(){
		getAjaxData();
	}
}

function getAjaxData() {	
	xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function (){
		showAjaxData();
	};

	var value=document.getElementById('times').value;
	xmlhttp.open("GET",`AjaxTimesTable.php?value=${value}`,true);
	xmlhttp.send();	
}

function showAjaxData() {
	if(xmlhttp.readyState==4 && xmlhttp.status==200) {
		document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
	}
}