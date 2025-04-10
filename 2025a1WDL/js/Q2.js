let width = 700;
let height = 410;
let scale = 10; // you can use this to scale
let barWidth = 20;
let current_site_name = "N13 Grianan Of Aileach";
let spacing = 5;
$("document").ready(function () {


    $.getJSON(`http://localhost/2025a1wdl/json/weatherdata.json`, function (data) {

    $.each(data.weatherdata, function (i, item) 
      {
        var svg = d3.select("#chart");
        var max = Maximum(data);
        var h = d3.scaleLinear()
            .domain([0, max])
            .range([0, height]);

        svg.append("rect")
            .attr("x",(barWidth) * i+ spacing)
            .attr("y",height - h(item.maxWindSpeed))
            .attr("width",barWidth)
            .attr("height",h(item.maxWindSpeed))
            .attr("fill","steelblue")
            .attr("stroke","black");

            svg.append("rect")
            .attr("x",(barWidth) * i+ spacing)
            .attr("y",height - h(item.avgWindSpeed))
            .attr("width",barWidth)
            .attr("height",h(item.avgWindSpeed))
            .attr("fill","black")
            .attr("stroke","white");
            
            svg.append("text")
            .text(`${item.maxWindSpeed}`)
            .attr("x",(barWidth) * i+ spacing)
            .attr("y",height - h(item.maxWindSpeed)+20)
            .attr("font-size",15)
            .attr("fill","white");
        
            
    
            svg.append("text")
            .text(`${item.avgWindSpeed}`)
            .attr("x",(barWidth) * i+ spacing)
            .attr("y",height-10)
            .attr("font-size",15)
            .attr("fill","white");
      });

      $(`#sites`).change(function()
        {

            var filteredData = _.filter(data.weatherdata,getavgAirTemperature);
            console.log(filteredData)
            function getavgAirTemperature(element)   
            {
                if(element.site_name==$(`#sites`).val())
                    return true;
            }
            $(`#chart`).empty();
            appendToTable(filteredData)
        });
    
      });
  $.getJSON(`http://localhost/2025a1wdl/json/sites.json`, function (data) {
    $.each(data.sites, function (i, item) 
    {
        $(`#sites`).append(
            `<option value=${item.site_name}>${item.site_name}</option>`
        );

    });

  });
});

function Maximum(dataset)
{
    return Math.max(...dataset.weatherdata.map(d => d.maxWindSpeed))
}

// function appendToTable(data)
// {
//     var svg = d3.select("#chart");
//     var max = Maximum(data);
//     var h = d3.scaleLinear()
//         .domain([0, max])
//         .range([0, height]);

//     $.each(data.weatherdata, function (i, item) 
//       {
//         svg.append("rect")
//             .attr("x",(barWidth) * i+ spacing)
//             .attr("y",height - h(item.maxWindSpeed))
//             .attr("width",barWidth)
//             .attr("height",h(item.maxWindSpeed))
//             .attr("fill","steelblue")
//             .attr("stroke","black");

//             svg.append("rect")
//             .attr("x",(barWidth) * i+ spacing)
//             .attr("y",height - h(item.avgWindSpeed))
//             .attr("width",barWidth)
//             .attr("height",h(item.avgWindSpeed))
//             .attr("fill","black")
//             .attr("stroke","white");
            
//             svg.append("text")
//             .text(`${item.maxWindSpeed}`)
//             .attr("x",(barWidth) * i+ spacing)
//             .attr("y",height - h(item.maxWindSpeed)+20)
//             .attr("font-size",15)
//             .attr("fill","white");
        
            
    
//             svg.append("text")
//             .text(`${item.avgWindSpeed}`)
//             .attr("x",(barWidth) * i+ spacing)
//             .attr("y",height-10)
//             .attr("font-size",15)
//             .attr("fill","white");
//       });
// }