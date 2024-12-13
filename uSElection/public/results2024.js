$(`document`).ready(function () {
	nav();
	footer();
    getJsonData();
});

function getJsonData() {
	$.getJSON("http://localhost:3000/results/2024", function(data){
        var percent1;
        var percent2;
        var totalVotes=0;
        var tableOutput=``;
        for(var i=0;i<data.length;i=i+2)
        {
            totalVotes=data[i].votes+data[i+1].votes;
            percent1 = Math.round((data[i].votes/totalVotes)*100)
            percent2 = Math.round((data[i+1].votes/totalVotes)*100)
            data[i].candidate_party.charAt(0);
            data[i+1].candidate_party.charAt(0);
            if(data[i].votes>data[i+1].votes)
            {
                tableOutput += `<tr>
                        <td style="background-color:#D61C1C">(${data[i].candidate_party.charAt(0)})`
            }
            else
            {
                tableOutput += `<tr>
                    <td style="background-color:#263FE0">(${data[i+1].candidate_party.charAt(0)})`
                        
                    
            }

            tableOutput += ` ${data[i].state_name} (${data[i].state_abbr})</td>
            <td>${data[i].candidate_name}</td>
            <td>${data[i].votes}</td>
            <td>${percent1}%</td>
            <td>${percent2}%</td>
            <td>${data[i+1].votes}</td>
            <td>${data[i+1].candidate_name}</td>
            </tr>`


            $("#tbody").html(tableOutput)
                totalVotes=0;
        }

	});	
}