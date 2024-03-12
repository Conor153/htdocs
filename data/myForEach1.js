$("document").ready(function(){

    var numbers = [1, 2, 3, 4, 5];
    var HTMLoutput = "";
    numbers.forEach(printElement);

    function printElement(item, index)
    {
        HTMLoutput+=(`${item} + ${item} = ${item+item} <br>`);
    }
    $("#myDiv").html(HTMLoutput); 
})