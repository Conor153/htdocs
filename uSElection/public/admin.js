$(`document`).ready(function () {
    nav();
    footer();
    getJsonData(2024);
    $(".updateButton").click(function (e) {
        let stateAbbr = e.target.value;
        let candidate1Votes = $(`Candidate1${data[i].state_abbr}`).val();
        let candidate2Votes = $(`Candidate2${data[i].state_abbr}`).val();

        //May need to pass candidate name over
        //Update by candidate

        $.post(`http://localhost/3000/updateResults`,
                {
                    "state_abbrv": stateAbbr,
                    "votes": candidate1Votes,
                    "votes": candidate2Votes,
                });
    });
    
});


function getJsonData(year) {
	$.getJSON(`http://localhost:3000/results/${year}`, function(data){
        for(var i=0;i<data.length;i=i+2)
        {
            $("#tbody").append(
                `<tr>
                <td>${data[i].state_name} (${data[i].state_abbr})</td>
                <td>${data[i].candidate_name}</td>
                <td colspan="2"><input id="Candidate1${data[i].state_abbr}" type="text" value="${data[i].votes}"></td>
                <td colspan="2"><input id="Candidate2${data[i].state_abbr}" type="text" value="${data[i+1].votes}"></td>
                <td>${data[i+1].candidate_name}</td>
                <td><button type="button" class="updateButton" type="button" value="${data[i].state_abbr}">Update</button></td>
                </tr>
                `);         
        }
	});	
}