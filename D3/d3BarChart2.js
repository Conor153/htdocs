var dataset = [{name:"Apples", value:100},
			   {name:"Pears", value:200},
			   {name:"Oranges", value:300}];

const barHeight = 50;
const spacing = 10;
const textcenter = 30;

window.onload = function(){

    var maximum = Maximum(dataset)
    
	var svg = d3.select("body").append("svg")
    .attr("width",maximum+100)
    .attr("height", 500);


    var elements = svg.selectAll("rect")
        .data(dataset);

    var text = svg.selectAll("text")
    .data(dataset);


    var name = svg.selectAll("text")
    .data(dataset);


    console.log(elements);

    elements.enter().append("rect")
        .attr("y",function(d,i){return i*(barHeight+spacing);})
        .attr("x",100)
        .attr("height", barHeight)
        .attr("width", function(d){return d.value})
        .attr("fill","steelblue");


        text.enter().append("text")
        .attr("y",function(d,i){return i*(barHeight+spacing) + barHeight /2 +5;})
        .attr("x",120)
        .attr("height",function(d){return d;})
        .text(function(d){return d.value})
        .attr("width",barHeight)
        .attr("font-size",20)
        .attr("fill","white");

        name.enter().append("text")
        .attr("y",function(d,i){return i*(barHeight+spacing) + barHeight /2 +5;})
        .attr("x",0)
        .attr("height",function(d){return d;})
        .text(function(d){return d.name})
        .attr("width",barHeight)
        .attr("font-size",20)
        //.attr("text-anchor", "start")
        .attr("fill","steelblue");

}

function Maximum(dataset)
{
    return Math.max(...dataset.map(d => d.value))
}
	

