window.onload = function () {

  document.getElementById("card_type").onchange = function () {
    // add your code here
    var type = document.getElementById("card_type").value;
    var card = document.getElementById("card");
    var name = document.getElementById("name").value;
    var number = document.getElementById("number").value;
    var expiry = document.getElementById("expiry").value;
    name.innerhtml=name;
    number.innerhtml=number;
    expiry.innerhtml=expiry;

    card.src=`images/${type}_card_front.png`;
  
  };

  // add your code here

  document.getElementById("button").onclick = function () 
  {
    // add your code here
    var name = document.getElementById("name").value;
    var number = document.getElementById("number").value;
    var expiry = document.getElementById("expiry").value;
    name.innerhtml=name;
    number.innerhtml=number;
    expiry.innerhtml=expiry;

  }

};
