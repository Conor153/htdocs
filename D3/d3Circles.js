window.onload = function(){
	
	var svg = d3.select("body").append("svg").attr("width",620).attr("height",300);

	svg.append("circle")
        .attr("cx",50)
        .attr("cy",150)
        .attr("r",50)
        .attr("fill","steelblue");

    svg.append("text")
        .text("100")
        .attr("x",35)
        .attr("y",160)
        .attr("font-size",20)
        .attr("fill","white");

    svg.append("circle")
        .attr("cx",205)
        .attr("cy",150)
        .attr("r",100)
        .attr("fill","steelblue");

    svg.append("text")
        .text("200")
        .attr("x",190)
        .attr("y",160)
        .attr("font-size",20)
        .attr("fill","white");
    
    svg.append("circle")
        .attr("cx",460)
        .attr("cy",150)
        .attr("r",150)
        .attr("fill","steelblue");  

    svg.append("text")
        .text("300")
        .attr("x",445)
        .attr("y",160)
        .attr("font-size",20)
        .attr("fill","white");
}
