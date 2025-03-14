var timer;
var countDice = 0;
var lastDiceValue = 0;

// use this to generate a random number from 1 .. 6
 var number = Math.floor(Math.random()*6)+1;


window.onload = function () {

  document.getElementById("roll").onclick = function () {
    // add your code here
    if(number != lastDiceValue)
    {
      createDice();
      var counter = document.getElementById("countDice")
      countDice =countDice+1;
      counter.innerHTML=countDice;
    }

  };

};

function createDice() {
  console.log("createDice...");
  
        var img = document.createElement("img");
        img.setAttribute("src", `a1/images/dice${number}.png`);
        var div = document.getElementById("myDiv");
        div.appendChild(img);
}
