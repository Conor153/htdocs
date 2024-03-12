$("document").ready(function(){

    const fruits = ["Apples", "Oranges", "Pears", "Bananas"];
    var HTMLoutput = "";

    for (fruit of fruits) {
        HTMLoutput += `${fruit} <br>`;
    }


    for(x of "hello world")
        console.log(x);


    $("#myDiv").html(HTMLoutput);    
})