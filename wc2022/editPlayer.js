$(`document`).ready(function() {


    var ID = localStorage.getItem("ID");

    $.ajax({
        url: `http://localhost/wc2022/getPlayerByID.php?id=${ID}`,
        cache: false,
        type: `GET`,
        dataType: `json`,       
        success: successFunc,
        error: errorFunc
    });

    function successFunc(data) {	
        $(`#name`).val(`${data.players[0].name}`);
        $(`#caps`).val(`${data.players[0].caps}`);
        $(`#goals`).val(`${data.players[0].goals}`);
        $(`#club`).val(`${data.players[0].club}`);
    

    $("#save").click(function()
    {
        let name = $(`#name`).val();
        let caps = $(`#caps`).val();
        let goals = $(`#goals`).val();
        let club = $(`#club`).val();
        $.post(`http://localhost/wc2022/updatePlayerData.php`,
        {   
            "ID":ID,
            "name": name,
            "caps": caps,
            "goals": goals,
            "club": club
        });

        alert("here ");
    });
    $("#cancel").click(function()
    {
		location.replace("http://localhost/wc2022/players.html");
    });
    }

      function errorFunc(xhr,status,strError) {
        $(`#myDiv`).text(`There was an error!`);
    }
    
});





