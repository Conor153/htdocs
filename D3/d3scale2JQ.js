$(document).ready(function() {
    var dataset = [100, 200, 300];
  
    var svg = d3.select("body").append("svg")
                                .attr("width",600)
                                .attr("height",170)
                                .attr("style","background: lightgrey");
                                
    var elements = svg.selectAll("rect")
                       .data(dataset);
                       
    var w = d3.scaleLinear()
              .domain([0,Maximum(dataset)])
              .range([0,600]); 

    elements.enter().append("rect")
                     .attr("x",0)
                     .attr("y",function(d,i){return i*60;})
                     .attr("width",function(d){return w(d);})
                     .attr("height",50)
                     .attr("fill","steelblue");
  });

  function Maximum(dataset)
{
    return Math.max(...dataset.map(d => d))
}