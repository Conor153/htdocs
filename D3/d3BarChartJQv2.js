$(document).ready(function() {

    // use d3 to draw bar chart
    var dataset = [100, 200, 300];
    var barHeight = 50;
    var spacing=10;
    
    var svg = d3.select("body").append("svg")
    .attr("width",function(){return Math.max(...dataset)})
    .attr("height",function(){return dataset.length*(barHeight+spacing)}); 

    var elements = svg.selectAll("rect")
        .data(dataset.reverse());

    var text = svg.selectAll("text")
    .data(dataset);

    console.log(elements);

    elements.enter().append("rect")
        .attr("x",0)
        .attr("y",function(d,i){return i*(barHeight+spacing);})
        .attr("height",barHeight)
        .attr("width",function(d){return d;})
        .attr("fill","steelblue");

    text.enter().append("text")
    .attr("x",25)
    .attr("y",function(d,i){return i*(barHeight+spacing)+30;})
    .attr("height",barHeight)
    .text(function(d){return d;})
    .attr("width",function(d){return d;})
    .attr("font-size",20)
    .attr("fill","white");
    
});