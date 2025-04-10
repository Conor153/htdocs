// var data = [{"x":100,"y":100},{"x":200, "y":200},{"x":300,"y":300},{"x":400, "y":200}];
var data = [
  { x: 100, y: 100 },
  { x: 200, y: 200 },
  { x: 300, y: 300 },
  { x: 400, y: 200 },
];
var spacing = 100;

var padding = 10;
var radius = 6;
var height = 400;
var width = 500;

window.onload = function () {
  var svg = d3
    .select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  var y = d3
    .scaleLinear()
    .domain([0, MaximumY(data)])
    .range([height-20, 20]);
  var yAxis = d3.axisLeft(y);

  var x = d3
    .scaleLinear()
    .domain([0, MaximumX(data)])
    .range([0, width-80]);
  var xAxis = d3.axisBottom(x);

  var line = d3.line()
    .x(d => x(d.x))
    .y(d => y(d.y));



  var chartGroup = svg.append("g").attr("transform", "translate(40, 0)");

  chartGroup.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cy", function (d) {
      return y(d.y)
    })
    .attr("cx", function (d) {
      return x(d.x);

    })
    .attr("r", radius)
    .attr("fill", "steelblue");


  svg
    .append("path")
    .attr("d", line(data))
    .attr("stroke", "red")
    .attr("fill", "none")
    .attr("transform", "translate(40, 0)");

  svg.append("g")
    .attr("transform", "translate(40, 0)")
    .call(yAxis);

  svg.append("g")
    .attr("transform", `translate(40, ${height - 20})`)
    .call(xAxis);

};



function MaximumY(dataset) {
  return Math.max(...dataset.map((d) => d.y));
}

function MaximumX(dataset) {
  return Math.max(...dataset.map((d) => d.x));
}