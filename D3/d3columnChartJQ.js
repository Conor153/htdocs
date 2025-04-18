var data = [100, 200, 300, 400, 500, 400, 300, 200, 100];
var spacing = 10;
var barwidth = 50;
var maximum = Maximum(data)
var height=600;

$(document).ready(function() {
	
	var svg = d3.select("body").append("svg")						  
                              .attr("width",600)
                              .attr("height",height)
							  .attr("style","background: lightgrey");

	var w = d3.scaleLinear()
	.domain([0,maximum])
	.range([0,600]);

	var elements = svg.selectAll("rect")
		.data(data);

	var h = d3.scaleLinear()
		.domain([0,Math.max(...data)])
		.range([0,height]);

	elements.enter().append("rect")
					.attr('x',function(d,i) { return (barwidth+spacing)*i; })
					.attr('y',function(d,i) { return height-h(d);})
					.attr('width',barwidth)
					.attr('height',function(d){ return w(d);})
					.attr('fill','steelblue');
});

function Maximum(dataset)
{
    return Math.max(...dataset.map(d => d))
}