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
        var percentDT;
        var percentKH;
        console.log(states);

        for(var j=0;j<data.length;j=j+2)
        {
            votesDT += data[j].votes;
            votesKH += data[j+1].votes;
            // if(data[j].votes> data[j+1].votes)
            //     evDT += states[j].ev
            // else
            //     evKH += states[j].ev
        }
        totalVotes = votesDT + votesKH;
        $("#table1 td:eq(0)").append(`${data[0].candidate_name}    ${data[1].candidate_name}`);
        $("#table1 td:eq(1)").append(`${evDT}     ${evKH}`);
        $("#table1 td:eq(2)").append(`${votesDT}   ${votesKH}`);

        for(var i=0;i<data.length;i=i+2)
        {
            `
            <tr>
            <td>${data[i].state_name} (${data[i].state_abbrv})</td>
            <td>${states[i].ev}</td>
            <td></td>
            </tr>
            `
        }

	});	
}

function getStateData() {
	$.getJSON("http://localhost:3000/states", function(data){
        states = data;

	});	
    console.log(states);
    getResultData();
}