window.onload = function(){
	
	var svg = d3.select("body").append("svg").attr("width",190).attr("height",300);

	svg.style("background-color", "Gainsboro");

svg.append("rect")
	.attr("x",0)
	.attr("y",0)
	.attr("width",2)
	.attr("height",310)
	.attr("fill","black");

	svg.append("rect")
	.attr("x",0)
	.attr("y",298)
	.attr("width",190)
	.attr("height",2)
	.attr("fill","black");

svg.append("rect")
	.attr("x",10)
	.attr("y",200)
	.attr("width",50)
	.attr("height",100)
	.attr("fill","steelblue");

	svg.append("text")
	.text("100")
	.attr("x",15)
	.attr("y",260)
	.attr("font-size",20)
	.attr("fill","white");

	svg.append("rect")
	.attr("x",75)
	.attr("y",100)
	.attr("width",50)
	.attr("height",200)
	.attr("fill","steelblue");

svg.append("text")
	.text("200")
	.attr("x",85)
	.attr("y",260)
	.attr("font-size",20)
	.attr("fill","white");

svg.append("rect")
	.attr("x",135)
	.attr("y",0)
	.attr("width",50)
	.attr("height",300)
	.attr("fill","steelblue");  

svg.append("text")
	.text("300")
	.attr("x",145)
	.attr("y",260)
	.attr("font-size",20)
	.attr("fill","white");
}
