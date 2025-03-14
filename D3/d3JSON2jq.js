$(document).ready(function() {
                               
    
    const barHeight = 50;
    const spacing = 10;
    d3.json("http://localhost:3000/data").then(function(dataset)
    {

        var maximum = Maximum(dataset)
        var svg = d3.select("body").append("svg")
                               .attr("width",maximum+100)
                               .attr("height",200);   



        console.log(dataset);        
        var elements = svg.selectAll("rect")
                      .data(dataset);

        var text = svg.selectAll("text")
        .data(dataset);


        var name = svg.selectAll("text")
        .data(dataset);


        elements.enter().append("rect")
                    .attr("x",100)
                    .attr("y",function(d,i){return i*60;})
                    .attr("width",function(d){return d.value;})
                    .attr("height",barHeight)
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

    });    
});


function Maximum(dataset)
{
    return Math.max(...dataset.map(d => d.value))
}