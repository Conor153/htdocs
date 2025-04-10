let width = 700;
let height = 240;
let scale = 20; // You can use this to scale if you want.  Or use your own solution.
let barWidth = 18;
let spacing = 5;
$("document").ready(function () {
  // this is here to let you see the data to use
  $.getJSON(
    `http://localhost/2025a1wdl/json/N15Bundoran.json`,
    function (data) {
      var svg = d3.select("#chart");

      console.log(data.weatherdata.length)

    var max = Maximum(data);
    var h = d3.scaleLinear()
        .domain([0, max])
        .range([0, height]);



      $.each(data.weatherdata, function (i, item) 
      {
        if(item.avgAirTemperature >= 5)
        {
            svg.append("rect")
            .attr("x",(barWidth) * i+ spacing)
            .attr("y",height - h(item.avgAirTemperature))
            .attr("width",barWidth)
            .attr("height",h(item.avgAirTemperature))
            .attr("fill","black")
            .attr("stroke","white");
            
        }
        else
        {
            svg.append("rect")
            .attr("x",(barWidth) * i+ spacing)
            .attr("y",height - h(item.avgAirTemperature))
            .attr("width",barWidth)
            .attr("height",h(item.avgAirTemperature))
            .attr("fill","steelblue")
            .attr("stroke","black");
        }
    
        svg.append("text")
        .text(`${item.avgAirTemperature}`)
        .attr("x",(barWidth) * i+ spacing)
        .attr("y",height-10)
        .attr("font-size",15)
        .attr("fill","white");
        
        
      });


      
    }
  );

  // add your code here
});

function Maximum(dataset)
{
    return Math.max(...dataset.weatherdata.map(d => d.avgAirTemperature))
}