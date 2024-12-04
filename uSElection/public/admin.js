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
                <td>${data[i].candidate_name}</td>
                <td colspan="2"><input class="" type="text" name="Candidate1${data[i].state_abbr}" id="Candidate1${data[i].state_abbr}" value="${data[i].votes}"></td>
                <td colspan="2"><input class="" type="text" name="Candidate2${data[i].state_abbr}" id="Candidate2${data[i].state_abbr}" value="${data[i+1].votes}"></td>
                <td>${data[i+1].candidate_name}</td>
                <td><button type="button" class="updateButton" type="button" value="${data[i].state_abbr}">Update</button></td>
                </tr>
                `);         
        }
	});	
}