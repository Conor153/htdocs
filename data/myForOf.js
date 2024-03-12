$("document").ready(function(){

    var numbers = [1, 2, 3, 4, 5];
    var HTMLoutput = "";
    var total = 0;
    var avg = 0
    for(var i=0; i<numbers.length; i++) 
    {
        ///  add your code here
        HTMLoutput+=`${numbers[i]} <br>`;
        total += numbers[i]
    }
    avg = (total/numbers.length);
    HTMLoutput+=`Total = ${total} <br>`
    HTMLoutput+=`Average = ${avg} <br>`
    $("#myDiv").html(HTMLoutput); 
})