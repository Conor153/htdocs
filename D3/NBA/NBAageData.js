window.onload = function () {

	var svgHeight = document.getElementById('svg').getAttribute('height');
	var svgWidth = document.getElementById('svg').getAttribute('width');
	var barWidth = 50;
	var spacing = 10;

	var svg = d3.select("svg");

	d3.json("http://localhost:3000/NBAgetAgeData").then(function (dataset) {
		var maximum = Maximum(dataset)

		var w = d3.scaleLinear()
			.domain([0, dataset])
			.range([0, svgWidth]);

		var h = d3.scaleLinear()
			.domain([0, maximum])
			.range([0, svgHeight]);

		var elements = svg.selectAll("rect")
			.data(dataset);

		var texts = svg.selectAll("text")
			.data(dataset);

		elements.enter().append("rect")
			.attr('x', function (d, i) { return (barWidth + spacing) * i; })
			.attr('y', function (d) { return svgHeight - h(d.freq)-(spacing*2); })
			.attr('width', barWidth)
			.attr('height', function (d) { return h(d.freq); })
			.attr('fill', 'steelblue');


			texts.enter().append("text")
			.attr("x", function (d, i) { return (barWidth + spacing) * i + barWidth / 2; })
			.attr("y",function(d,i){return parseInt(svgHeight-(spacing/2))})
			.text(function(d){return d.age;})
			.attr("font-size",20)
			.attr("fill","black")
			.attr("text-anchor", "middle");

		$(`#data`).text(JSON.stringify(dataset))
	});
}

function Maximum(dataset) {
	return Math.max(...dataset.map(d => d.freq))
}

