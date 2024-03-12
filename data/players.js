$("document").ready(function(){

    $(".playerEdit").click(function(){

        // alert($(this).val());

        if (typeof(Storage) !== "undefined") {
            sessionStorage.setItem("playerName", $(this).val());
            window.location.href = "editPlayer.html";
        }
        else {
            console.log("Sorry! No Web Storage support. Do this another way.");
        }
        
    });

});