let states = [];
$(`document`).ready(function () {
	nav();
	footer();
    getJsonData();
    $("#ev").click(function ()
    {
        $("#tbody").empty();
        states.sort(function(a,b){
            if(a.ev<b.ev)
                return 1;
            else if(b.ev<a.ev)
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
        states.sort(function(a,b){
            if(a.name>b.name)
                return 1;
            else if(b.name>a.name)
                return -1;
            else 
                return 0;
        });
        DisplayData(states);
    });

});

function getJsonData() {
	$.getJSON("http://localhost:3000/states/", function(data){
		states = data;
        DisplayData(data);	

	});	
} 
function DisplayData(states)
{
    $.each(states, function(i, value){
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