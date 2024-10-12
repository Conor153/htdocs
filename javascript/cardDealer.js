window.onload = function()
{
    var deal = document.getElementById("deal");
    var output ="";

    deal.onclick = function()
    {
        //Get a random number generated
        var num =Math.floor(Math.random()*52)+1;
        console.log(num);
        var img = document.createElement("img");
        img.setAttribute("src", `"D:/xampp/htdocs/javascript/images/${num.value}.png">`);
        var div = document.getElementById("output");
        div.appendChild(img);
    }

}