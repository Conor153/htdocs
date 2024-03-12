window.onload = function() {

  // add your solution here
  setInterval(tick,1000);
}


// call every second
function tick()
{
  var d = new Date();
  var t = d.toLocaleTimeString(); // t is the current time
  var output = document.getElementById("output");
  output.innerHTML=t;
  // add your solution here
   
}