let companies = [];

$("document").ready(function () {    

    $.getJSON("http://localhost:3000/companies", function (data) {
        console.log(data);
        companies=data;                // storing a working copy in companies array too

        $("#tbody").empty();
        $.each(companies, function(i, value){
        $(`#tbody`).append(
            `<tr>
            <td>${value.name}</td>
            <td><button class="delete" id="deleteButton">Delete</button></td>
            </tr>`
        )
        });
    
    });

    // add 
    $("#addButton").click(function(){        
        let name = $("#name").val();
        console.log(name);
        $.post("http://localhost:3000/companies/add",{"name": `${name}` },function(data){
        }, "json");

        window.location.href = "http://localhost:3000/q3.html";
    });


    $("#delete").click(function(e){        
        let name = e.target.value;
        console.log(name)
        $.post("http://localhost:3000/companies/delete",{"name": `${name}` },function(data){
            
        }, "json");

        window.location.href = "http://localhost:3000/q3.html";
    });

  
});
  