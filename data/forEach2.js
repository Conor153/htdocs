$("document").ready(function(){

    const fruits = ["Apples", "Oranges", "Pears", "Bananas"];
    var HTMLoutput = "";

    fruits.forEach(function(item, index){        
        HTMLoutput+=`<p>${item.toUpperCase()}</p>`;
    })

    $("#myDiv").html(HTMLoutput);    
})