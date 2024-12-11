$(`document`).ready(function () {
    nav();
    footer();
    getJsonData(2024);

});
function getJsonData(year) {
	$.getJSON(`http://localhost:3000/results/${year}`, function(data){
        for(var i=0;i<data.length;i=i+2)
        {
            $("#tbody").append(
                `<tr>
                <td>${data[i].state_name} (${data[i].state_abbr})</td>
                <td id="DT">${data[i].candidate_name}</td>
                <td colspan="2"><input id="Candidate1${data[i].state_abbr}" type="text" value="${data[i].votes}"></td>
                <td colspan="2"><input id="Candidate2${data[i].state_abbr}" type="text" value="${data[i+1].votes}"></td>
                <td id="KH">${data[i+1].candidate_name}</td>
                <td><button type="button" class="updateButton" value="${data[i].state_abbr}">Update</button></td>
                </tr>
                `);         
        }
        $(".updateButton").click(function (e) {
            let stateAbbr = e.target.value;
            let votesDT = $(`#Candidate1${stateAbbr}`).val();
            let votesKH = $(`#Candidate2${stateAbbr}`).val();
            let nameDT = $(`#DT`).text();
            let nameKH = $(`#KH`).text();

            console.log("Button clicked for state: " + stateAbbr);
            console.log("Candidate 1 Votes: " + votesDT);
            console.log("Candidate 2 Votes: " + votesKH);
            console.log("Candidate 1 Name: " + nameDT);
            console.log("Candidate 2 Name: " + nameKH);

            $.post(`http://localhost:3000/updateResults`, {
                abbr: stateAbbr,
                votes: votesDT,
                name: nameDT
            });
            $.post(`http://localhost:3000/updateResults`, {
                abbr: stateAbbr,
                votes: votesKH,
                name: nameKH
            });
        });
	});	
    
}
