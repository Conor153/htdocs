$("document").ready(function(){

    const fruits = ["Apples", "Oranges", "Pears", "Bananas"];

    var HTMLoutput = "";

    for(var i=0; i<fruits.length; i++)
        HTMLoutput+=`${fruits[i]} <br>`;

    $("#myDiv").append(HTMLoutput);

})