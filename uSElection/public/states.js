let states = [];
$(`document`).ready(function () {
	nav();
	footer();
    getJsonData();
    $("#ev").click(function ()
    {
        $("#tbody").empty();
        states.sort(function(a,b){
            if(a.ev>b.ev || a.names>b.names)
                return 1;
            else if(a.ev<b.ev || b.names>a.names)
                return -1;
            else 
                return 0;
        }
    )
        DisplayData(states);

    });
    $("#name").click(function ()
    {
        $("#tbody").empty();
        states.sort();
        DisplayData(states);
    });

});

function getJsonData() {
	$.getJSON("http://localhost:3000/states/", function(data){
		states = data;
        console.log(data);
        console.log(states);
        DisplayData(data);	

	});	

function DisplayData(states)
{
    $.each(states, function(i, value){
        //$("#tbody").empty();

        $("#tbody").append(
            `<tr>
            <td>${value.name}</td>
            <td>${value.abbr}</td>
            <td>${value.capital}</td>
            <td>${value.ev}</td>
            </tr>
            `);
    });
}

} 