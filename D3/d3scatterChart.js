// var data = [{"x":100,"y":100},{"x":200, "y":200},{"x":300,"y":300},{"x":400, "y":200}];
var data = [{x:100,y:100},{x:200, y:200},{x:300,y:300},{x:400, y:200}];
var spacing = 100;


var padding=10;
var radius = 6;
var height = 400;
var width = 500;

window.onload = function()
{
	var svg = d3.select("body").append("svg")
    .attr("width" ,width)
    .attr("height", height);
	
    var maximum = Maximum(data);


        svg.append("line")
		.attr("x1",0)
        .attr("y1",0)
        .attr("x2",0)
        .attr("y2",maximum)
		.attr("stroke","black")
        .attr("stroke-width",2);

        svg.append("line")
        .attr("x1",0)
        .attr("y1",maximum)
        .attr("x2",height)
        .attr("y2",maximum)
        .attr("stroke-width",2)
        .attr("stroke","black");

        var line = d3.line().x(function(d){
                return d.x; }
            )
            .y(function(d) {
                return maximum-d.y+padding; })

        svg.append("path")
        .attr("d", line(data))
        .attr("stroke", "red")
        .attr("fill", "white");

        var elements = svg.selectAll("circle")
        .data(data);
    console.log(elements);
	
    elements.enter().append("circle")
        .attr("cy",function(d){return (maximum-d.y)+padding})
        .attr("cx",function(d){return d.x;})
        .attr("r",radius)
        .attr("fill","steelblue");
        
}


function Maximum(dataset)
{
    return Math.max(...dataset.map(d => d.y))
}


