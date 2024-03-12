$("document").ready(function(){


    var fruits = ["Apples", "Oranges", "Pears", "Bananas"];
    for (fruit of fruits)
        $("#before").append(`${fruit} `);

    fruits.push("Grapes");
  
    for (fruit of fruits)
        $("#after").append(`${fruit} `);


});
