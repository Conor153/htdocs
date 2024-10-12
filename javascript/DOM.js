
function part1()
{
	console.log("-- part1 --");
	var h1 = document.getElementById("heading");
	console.log("heading=" + h1.innerHTML);
}


function part2()
{
	console.log("-- part2 --");
	var h1 = document.getElementById("heading").style.textAlign = "right";
	console.log(h1.innerHTML);
	h1.innerHTML="Letterkenny Institute of Technology"
}

function part3()
{
	console.log("-- part3 --");
	var p2 = document.getElementById("p2");
	console.log(p2.innerHTML);
	p2.innerHTML="We have campuses in Letterkenny and Killybegs."

}

function part4()
{
	console.log("-- part4 --");
	var l3 = document.getElementById("l3");
	console.log(l3.innerHTML);
	l3.innerHTML="Email Us"
	
}

function part5()
{
	console.log("-- part5 --");
	var a1 = document.getElementById("a1");
	a1.setAttribute("href","http://noucamp.org");
	console.log(a1.innerHTML);
	a1.innerHTML="Nou Camp"
	
}

function part6()
{
	console.log("-- part6 --");
	var img = document.getElementById("twitter");
	img.src = "file:///D:/xampp/htdocs/javascript/images/twitter2.png";

}

function part7()
{
	console.log("-- part7 --");
	var t1 = document.getElementById("t1");
	t1.setAttribute("border","1");
}

function part8()
{
	console.log("-- part8 --");
	var para = document.getElementsByTagName("p").style.textAlign = "right";
	for(var i=0; i<para.length; i++)
	console.log(para[i].innerHTML);


}

function part9()
{
	console.log("-- part9 --");
	var dd = document.getElementById("dd");
	console.log(dd.value);

}

function part10()
{
	console.log("-- part10 --");
	var tb = document.getElementById("name");
	tb.value = "input name";
}