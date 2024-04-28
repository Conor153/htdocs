let totalPointsFor = 0;
let totalPointsAgainst = 0;
let pointdifferential = 0;
let gamePointsFor = 0;
let gamePointsAgainst = 0;
let tablePoints = 0;
let wins = 0;
let draws = 0;
let losses = 0;
let played = 0;
let teamName;
let teams = [];
$(`document`).ready(function () {
    nav();
    footer();
    getDivision1Teams();
});
function getDivision1Teams() {
    $.ajax({
        url: `http://localhost/a2/ajax/getDivision1Teams.php`,
        cache: false,
        type: `GET`,
        dataType: `json`,
        success: successFunc,
    });
    function successFunc(data) {
        $.each(data.results, function (index, results) {
            getTableData(results.team1ID);
        });
    };
}
function getTableData(teamID) {
    $.ajax({
        url: `http://localhost/a2/ajax/getResultsByTeam.php?team=${teamID}`,
        cache: false,
        type: `GET`,
        dataType: `json`,
        success: successFunc2
    });
    function successFunc2(data) {
        played = 0;
        wins = 0;
        losses = 0;
        draws = 0;
        pointdifferential = 0;
        totalPointsFor = 0;
        totalPointsAgainst = 0;
        $.each(data.results, function (index, results) {
            if (results.team1Score != 0 || results.team2Score != 0) {
                gamePointsFor = 0;
                gamePointsAgainst = 0;
                played++;
                if (results.team1ID == teamID) {
                    teamName = results.team1;
                    gamePointsFor = CalculateMatchPoints(results.team1Goals, results.team1Points)
                    gamePointsAgainst = CalculateMatchPoints(results.team2Goals, results.team2Points)
                }
                else if (results.team2ID == teamID) {
                    teamName = results.team2;
                    gamePointsFor = CalculateMatchPoints(results.team2Goals, results.team2Points)
                    gamePointsAgainst = CalculateMatchPoints(results.team1Goals, results.team1Points)

                }
                if (gamePointsFor > gamePointsAgainst) {
                    wins++;
                }
                else if (gamePointsFor < gamePointsAgainst) {
                    losses++;
                }
                else {
                    draws++;
                }
                totalPointsFor = totalPointsFor + gamePointsFor;
                totalPointsAgainst = totalPointsAgainst + gamePointsAgainst;
                pointdifferential = totalPointsFor - totalPointsAgainst;
                // console.log("POINTS WE SCORED " + gamePointsFor);
                // console.log("POINTS THEY SCORED " + gamePointsAgainst);
                // console.log("POINTS THIS SEASON " + totalPointsFor);
                // console.log("POINTS THIS AGGANSIT SEASON " + totalPointsAgainst);
                // console.log("PD " + pointdifferential);
                // console.log("WINS " + wins);
                // console.log("LOSSES " + losses);
                // console.log("DRAWS " + draws);
                tablePoints = CalculateTablePoints(wins, draws)
                // console.log("Table Points " + tablePoints);
            }


        });
        let teamData =
        {
            teamName,
            played,
            wins,
            losses,
            draws,
            pointdifferential,
            tablePoints
        };
        teams.push(teamData)

        teams.sort(function (a, b) {
            if (a.tablePoints > b.tablePoints)
                return -1;
            else if (a.tablePoints < b.tablePoints)
                return 1;
            else if (a.tablePoints == b.tablePoints) {
                if (a.pointdifferential < b.pointdifferential)
                    return 1;
                else
                    return -1;
            }
        });
        $(`#tbody`).empty();//Clear the current table
        $.each(teams, function (index, team) {
            $(`#tbody`).append(`<tr>
                <td>${index + 1}</td>
                <td>${team.teamName}</td>
                <td>${team.played}</td>
                <td>${team.wins}</td>
                <td>${team.draws}</td>
                <td>${team.losses}
                <td>${team.pointdifferential}</td>
                <td></td>
                <td>${team.tablePoints}</td>
                </tr>`);
        });

    };
}
function CalculateTablePoints(w, l) {
    return (w * 2) + (l);
}

function CalculateMatchPoints(goals, points) {
    return (goals * 3) + points;
}

function CalculatePointDifferential(pointsFor, pointsAgainst) {
    return pointsFor - pointsAgainst;
}

