$("document").ready(function(){

    $.getJSON(`http://localhost:3000/weather`, function(data){
        appendToTable(data)
        $(`#atempSlider`).change(function()
        {
            console.log($(`#atempSlider`).val())
            $(`#aTemp`).text($(`#atempSlider`).val())
            var filteredData = _.filter(data,getavgAirTemperature);
            console.log(filteredData)
            function getavgAirTemperature(element)   
            {
                if(element.avgAirTemperature<=$(`#atempSlider`).val())
                    return true;
            }
            $(`#tbody`).empty();
            appendToTable(filteredData)
        });

    });
});

function appendToTable(data)
{
    $.each(data, function(i, value){
        $(`#tbody`).append(
            `<tr>
            <td>${value.date}</td>
            <td>${value.site_name}</td>
            <td>${value.avgAirTemperature}</td>
            <td>${value.avgWindSpeed}</td>
            <td>${value.windDirectionBearing}</td>
            </tr>`
        )
        });
}
