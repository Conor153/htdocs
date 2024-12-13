$(`document`).ready(function () {
	nav();
	footer();
    getJsonData(2024);
    $(".year").click(function (e) {
		let link = e.target.value;
		getJsonData(link);
	});
    
});

function getJsonData(year) {
	$.getJSON(`http://localhost:3000/results/${year}`, function(data){
        var percent1 = 0;
        var percent2= 0;
        var totalVotes=0;
        for(var i=0;i<data.length;i=i+2)
        {
            totalVotes=data[i].votes+data[i+1].votes;
            percent1 = Math.round((data[i].votes/totalVotes)*100)
            percent2 = Math.round((data[i+1].votes/totalVotes)*100)
            totalVotes=0;
            if(data[i].votes>data[i+1].votes)
            {
                $(`#${data[i].state_abbr}`).attr("fill", "#D32F2F")
            }
            else
            {
                $(`#${data[i].state_abbr}`).attr("fill", "#0a53e4")
            }
            $("#tbody").append(
                `
                <td>${data[i].candidate_name}</td>
                <td>${data[i].votes}</td>
                <td>${percent1}%</td>
                <td>${percent2}%</td>
                <td>${data[i+1].votes}</td>
                <td>${data[i+1].candidate_name}</td>
                </tr>
                `);
            
        }

	});	
}