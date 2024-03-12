var count=0;
var handle;

window.onload = function() {

  var startButton = document.getElementById("start");   
  startButton.onclick=function(){
    handle=setInterval(addLi,1000);
  }
  var stopButton = document.getElementById("stop");   
  stopButton.onclick=function(){
    clearInterval(handle);
  }
}
 
function addLi()
{
  var liElement = document.createElement("li");           
  count=count+1;
  var text = document.createTextNode("Item " + count);        
  liElement.appendChild(text);        
  var list = document.getElementById("list");
  list.appendChild(liElement);    
}