$("document").ready(function(){

    var numbers = [1, 2, 3, 4, 5];
    var HTMLoutput = "";
    var emoji = String.fromCodePoint(0x1F600)
    numbers.forEach(printElement);

    function printElement(item, index)
    {
        HTMLoutput+=(`[${item}] `);
        for(var i=0;i<item;i++)
        {
            HTMLoutput+=(`${emoji}`);  
        }
        HTMLoutput+=(`<br>`);
    }
    $("#myDiv").html(HTMLoutput); 
})