$(document).ready(function() {

    var dataset = [{x: 0, y: 150},{x: 50, y: 50},{x: 100, y: 0},{x: 150, y: 50},{x: 200, y: 0}];
    var dataset2 = [5,22,28,42,53,61,52,36,38,34,40,19,23,20,13,5,5,7,6,1,1,2,1];

    var line = d3.line()
        .x(function(d){
            return d.x;
        })
        .y(function(d){
            return d.y;
        })
        .curve(d3.curveCardinal);

    //Line 2
    //Get the height and dubtarct
    var line2 = d3.line()
    .x(function(d){
        return d;
    })
    .y(function(d, index){
        return index;
    })
    .curve(d3.curveCardinal);
    
    var svg = d3.select("#mysvg");   
    svg.append("path")
    .attr('d',line(dataset))
    .attr('fill','none')
    .attr('stroke','blue');

    var svg = d3.select("#mysvg2");   
    svg.append("path")
    .attr('d',line(dataset))
    .attr('fill','none')
    .attr('stroke','blue');

    var svg = d3.select("#mysvg3");   
    svg.append("path")
    .attr('d',line2(dataset2))
    .attr('fill','none')
    .attr('stroke','blue');

});
