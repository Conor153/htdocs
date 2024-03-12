$("document").ready(function(){

    const fruits = ["Apples", "Oranges", "Pears", "Bananas"];
    var HTMLoutput = "";

    fruits.forEach(function(item, index){
        HTMLoutput+=`<p>${index}. ${item}</p>`;
    })

    $("#myDiv").html(HTMLoutput);    
})