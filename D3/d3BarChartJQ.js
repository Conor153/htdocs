$(document).ready(function() {



    var svg = d3.select("body").append("svg")
        .attr("width",300)
        .attr("height",200);

    svg.append("rect")
        .attr("x",0)
        .attr("y",0)
        .attr("width",100)
        .attr("height",50)
        .attr("fill","steelblue");

    svg.append("text")
        .text("100")
        .attr("x",10)
        .attr("y",35)
        .attr("font-size",20)
        .attr("fill","white");

    svg.append("rect")
        .attr("x",0)
        .attr("y",60)
        .attr("width",200)
        .attr("height",50)
        .attr("fill","steelblue");

    svg.append("text")
        .text("200")
        .attr("x",10)
        .attr("y",90)
        .attr("font-size",20)
        .attr("fill","white");
    
    svg.append("rect")
        .attr("x",0)
        .attr("y",120)
        .attr("width",300)
        .attr("height",50)
        .attr("fill","steelblue");  

    svg.append("text")
        .text("300")
        .attr("x",10)
        .attr("y",150)
        .attr("font-size",20)
        .attr("fill","white");
    
});