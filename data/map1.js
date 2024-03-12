$("document").ready(function(){


    var numbers = [1, 2, 3, 4, 5];
    for (number of numbers) 
        $("#before").append(`${number} `);
    console.log(numbers);

    function sqr(num){
        return num*num;
    }       
    
    numbers = numbers.map(sqr);

    for (number of numbers) 
        $("#after").append(`${number} `);
    console.log(numbers);

});
