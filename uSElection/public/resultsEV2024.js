let states = [];
$(`document`).ready(function () {
	nav();
	footer();
    getStateData();
});

function getResultData() {
	$.getJSON("http://localhost:3000/results/2024", function(data){
        var totalVotes=0;
        var votesDT=0;
        var votesKH=0;
        var evDT=0;
        var evKH=0;
        var tableOutput=``;


        console.log(states);

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
        // $("#table1 td:eq(0)").append(`${data[0].candidate_name}    ${data[1].candidate_name}`);


        // $("#table1 td:eq(1)").append(`${evDT}     ${evKH}`);


        // $("#table1 td:eq(2)").append(`${votesDT}(${percentDT}%)   ${votesKH}(${percentKH}%)`);

        $("#table1 td:eq(0)").html(`
            <div style="display: flex; justify-content: space-between;">
                <span>${data[0].candidate_name}</span>
                <span>${data[1].candidate_name}</span>
            </div>
        `);
        $("#table1 td:eq(1)").html(`
            <div style="display: flex; justify-content: space-between;">
                <span>${evDT}</span>
                <span>${evKH}</span>
            </div>
        `);
        $("#table1 td:eq(2)").html(`
            <div style="display: flex; justify-content: space-between;">
                <span>${votesDT} (${percentDT}%)</span>
                <span>${votesKH} (${percentKH}%)</span>
            </div>
        `);



        console.log(data);
        console.log(states);
        for(var i=0;i<states.length;i++)
        {
            tableOutput += `<tr >`
            if(data[i*2].votes> data[i*2+1].votes)
            {
                tableOutput += `<td style="background-color:#D32F2F">${states[i].name} (${states[i].abbr})</td>
            <td style="background-color:#D32F2F">${states[i].ev}</td>
            <td style="background-color:#D32F2F">${data[i*2].candidate_name}</td>
            </tr>`;

            }
            else
            {
                tableOutput += `<td style="background-color:#0a53e4">${states[i].name} (${states[i].abbr})</td>
            <td style="background-color:#0a53e4">${states[i].ev}</td>
            <td style="background-color:#0a53e4">${data[i*2+1].candidate_name}</td>
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