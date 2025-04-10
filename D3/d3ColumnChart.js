var data = [100,200,300,800,300,200,100];

const spacing = 10;
const barwidth = 50;
const textline = function(){return Math.max(...data)-25};
const textcenter = 10;

window.onload = function() {

	var svg = d3.select("svg")
    .attr("height",function(){return Math.max(...data)})
    .attr("width",function(){return data.length*(barwidth+spacing)}); 

    var elements = svg.selectAll("rect")
        .data(data);

    var text = svg.selectAll("text")
    .data(data);

    console.log(elements);

    elements.enter().append("rect")
        .attr("y",function(d,i){return Math.max(...data)-d;})
        .attr("x",function(d,i){return i*(barwidth+spacing);})
        .attr("height",function(d){return d;})
        .attr("width", barwidth)
        .attr("fill","steelblue");

    text.enter().append("text")
    .attr("y",textline)
    .attr("x",function(d,i){return i*(barwidth+spacing)+textcenter;})
    .attr("height",function(d){return d;})
    .text(function(d){return d;})
    .attr("width",barwidth)
    .attr("font-size",20)
    .attr("fill","white");

}

function Maximum(dataset)
{
    return Math.max(...dataset.map(d => d))
}