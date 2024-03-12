$("document").ready(function(){


    var numbers = [1, 2, 3, 4, 5];
    for(var number of numbers)
        $("#before").append(`${number} `);

    function odd(num){
        if(num % 2 == 1)
            return num;
    }

    console.log(numbers);

    numbers = numbers.filter(odd);

    for(var number of numbers)
        $("#after").append(`${number} `);
    
    console.log(numbers);



});
