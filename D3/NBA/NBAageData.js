window.onload = function() {

    var svgHeight = document.getElementById('svg').getAttribute('height');
    var svgWidth = document.getElementById('svg').getAttribute('width');
    var barWidth=50;
    var spacing=10;

    var svg = d3.select("svg");
                               
    d3.json("http://localhost:3000/NBAgetAgeData").then(function(dataset)
    {
        console.log(dataset); 
        var maximum = Maximum(dataset)

        var svg = d3.select("body").append("svg")						  
                              .attr("width",svgWidth)
                              .attr("height",svgHeight)
							  .attr("style","background: lightgrey");

		var w = d3.scaleLinear()
		.domain([0,maximum])
		.range([0,svgWidth]);

	    var elements = svg.selectAll("rect")
		.data(data);

	    var h = d3.scaleLinear()
		.domain([0,Math.max(...data)])
		.range([0,svgHeight]);

	    elements.enter().append("rect")
					.attr('x',function(d,i) { return (barwidth+spacing)*i; })
					.attr('y',function(d,i) { return height-h(d);})
					.attr('width',barWidth)
					.attr('height',function(d){ return w(d);})
					.attr('fill','steelblue');
        
    });   
}

function Maximum(dataset)
{
    return Math.max(...dataset.map(d => d.age))
}
