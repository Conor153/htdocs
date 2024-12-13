let states = [];
$(`document`).ready(function () {
	nav();
	footer();
    getStateData();
});

function getResultData() {
	$.getJSON("http://localhost:3000/results/2024", function(data){
        var totalVotes=0;
        var totalEV = 0;
        var votesDT=0;
        var votesKH=0;
        var evDT=0;
        var evKH=0;
        var tableOutput=``;

        for(var j=0;j<states.length;j++)
        {
            votesDT += data[j*2].votes;
            votesKH += data[j*2+1].votes;
            if(data[j*2].votes> data[j*2+1].votes)
                evDT += states[j].ev
            else
                evKH += states[j].ev
        }

        totalVotes = votesDT + votesKH;
        var percentDT = Math.round((votesDT/totalVotes)*100)
        var percentKH = Math.round((votesKH/totalVotes)*100)
        totalEV = evDT + evKH;
        var evPercent = Math.round((evDT/totalEV)*100)

        votesDT = votesDT.toLocaleString();
        votesKH = votesKH.toLocaleString();
        
        $("#table1 td:eq(0)").append(`${data[0].candidate_name}<span style="float: right">${data[1].candidate_name}</span>`);
        $("#table1 td:eq(1)").attr(`style`,`background-image: linear-gradient(to right, #D61C1C 0%, #D61C1C ${evPercent}%, #263FE0 ${evPercent}%, #263FE0 100%)`);
        $("#table1 td:eq(1)").css(`color`, `white` );
        $("#table1 td:eq(1)").append(`<span>${evDT}</span><span style="float: right">${evKH}</span>`);
        $("#table1 td:eq(2)").attr(`style`,`background-image: linear-gradient(to right, #D61C1C 0%, #D61C1C ${percentDT}%, #263FE0 51%, #263FE0 100%)`);
        $("#table1 td:eq(2)").css(`color`, `white` );
        $("#table1 td:eq(2)").append(`<span>${votesDT} (${percentDT}%)</span><span style="float: right">${votesKH} (${percentKH}%)</span>`);


        for(var i=0;i<states.length;i++)
        {
            tableOutput += `<tr >`
            if(data[i*2].votes> data[i*2+1].votes)
            {
                tableOutput += `<td style="background-color:#D61C1C">${states[i].name} (${states[i].abbr})</td>
            <td style="background-color:#D61C1C">${states[i].ev}</td>
            <td style="background-color:#D61C1C">${data[i*2].candidate_name}</td>
            </tr>`;

            }
            else
            {
                tableOutput += `<td style="background-color:#263FE0">${states[i].name} (${states[i].abbr})</td>
            <td style="background-color:#263FE0">${states[i].ev}</td>
            <td style="background-color:#263FE0">${data[i*2+1].candidate_name}</td>
            </tr>`;
            
            }
            tableOutput += `</tr>`
        }
        $("#tbody").append(`${tableOutput}`);

	});	
}

function getStateData() {
	$.getJSON("http://localhost:3000/states", function(data){
        states = data;
        getResultData();
	});	
}