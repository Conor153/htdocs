$("document").ready(function(){


    if (typeof(Storage) !== "undefined") {

        // alert(sessionStorage.getItem("playerName"));

        $("#playerName").val(sessionStorage.getItem("playerName"));
    }
    else {
        console.log("Sorry! No Web Storage support. Do this another way.");
    }
});