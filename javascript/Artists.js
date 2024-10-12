window.onclick = function(){
	addLi("Miley Cyrus");
}


function addLi(artist)
{
	var newElement = document.createElement("li");
	var myText = document.createTextNode(artist);
	newElement.appendChild(myText);

	var myList = document.getElementById("myList"); 
	myList.appendChild(newElement);



	var newTd = document.createElement("td");
	var text = document.createTextNode(artist);
	newTd.appendChild(text);
	var  artTable = document.getElementById("artistTable"); 
	artTable.appendChild(newTd);

}
