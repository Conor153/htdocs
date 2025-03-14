let companies = [];

$("document").ready(function () {    

    $.getJSON("http://localhost:3000/companies", function (data) {
        console.log(data);
        companies=data;                // storing a working copy in companies array too

        $("#tbody").empty();
        // add companies to table
        // ???
        // ???
    
    });

    // add 
    $("#addButton").click(function(){        
        let name = $("#name").val();        
        $.post("http://localhost:3000/companies/add",{"company": "???" },function(data){
        }, "json");

        window.location.href = "http://localhost:3000/q3.html";
    });

  
});
  