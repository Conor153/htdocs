$(`document`).ready(function () {
    nav();
    footer();
    getSelectData();
    getResults($("#round").val());

    $("#round").change(function () {
        getResults($("#round").val());
    });
});

function getResults(currentRound) {
    $.ajax({
        url: `http://localhost/a2/ajax/getResultsByRound.php?round=${currentRound}`,
        cache: false,
        type: `GET`,
        dataType: `json`,
        success: successFunc,
    });

    //Print the data into the table
    function successFunc(data) {
        $("#tbody").empty();
        $.each(data.results, function (index, results) {
            $(`#tbody`).append(`<tr><td>${results.date}</td>
            <td>${results.round}</td>
            <td><img src=logos/${results.team1}.png></img> ${results.team1}</td>
            <td><input id="team1Goals${results.id}" class="form-control" type="text" value="${results.team1Goals}"></input></td>
            <td>-</td>
            <td><input id="team1Points${results.id}" class="form-control" type="text" value="${results.team1Points}"></input></td>
            <td><input id="team2Goals${results.id}" class="form-control" type="text" value="${results.team2Goals}"></input></td>
            <td>-</td>
            <td><input id="team2Points${results.id}" class="form-control" type="text" value="${results.team2Points}"></input></td>
            <td><img src=logos/${results.team2}.png></img> ${results.team2}</td>
            <td>D${results.division} Rd${results.round}</td>
            <td><button type="button" class="updateButton btn btn-primary" type="button" value="${results.id}">Update</button></td>
            <td><button type="button" class="deleteButton btn btn-primary" type="button" value="${results.id}">Delete</button></td>
            </tr>`);
        });
        $(".updateButton").click(function (e) {
            let ID = e.target.value;
            let team1Goals = $(`#team1Goals${ID}`).val();
            let team1Points = $(`#team1Points${ID}`).val();
            let team1Score = `${team1Goals}-${team1Points}`;
            let team2Goals = $(`#team2Goals${ID}`).val();
            let team2Points = $(`#team2Points${ID}`).val();
            let team2Score = `${team2Goals}-${team2Points}`;
            $.post(`http://localhost/a2/ajax/updateResults.php`,
                {
                    "ID": ID,
                    "team1Score": team1Score,
                    "team1Goals": team1Goals,
                    "team1Points": team1Points,
                    "team2Score": team2Score,
                    "team2Goals": team2Goals,
                    "team2Points": team2Points
                });
        });
        $(".deleteButton").click(function (e) {
            let ID = e.target.value;
            $.post(`http://localhost/a2/ajax/deleteResult.php`,
                {
                    "ID": ID,
                });
            $("#tbody").empty();
            getResults(currentRound);
        });
    };
}
function getSelectData() {
    for (var i = 1; i <= 7; i++) {
        $(`#round`).append(`<option value=${i}>${i}</option>`);
    }
}