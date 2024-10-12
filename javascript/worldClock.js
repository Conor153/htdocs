var resume = false;
var hours;
window.onload = function() {
	  setInterval(tick,1000);
  }
  
  
  // call every second
  function tick()
  {
		var d = new Date();
		if(resume==false){
			var t = d.toLocaleTimeString();
			time.innerHTML=t;
		}
		var time = document.getElementById("time");
		var timezone1 = document.getElementById("timezone1"); 
		var timezone2 = document.getElementById("timezone2");
		timezone1.onclick = function() {
			var p = new Date();
			p.setHours(p.getHours()+1);
			var t = p.toLocaleTimeString();
			time.innerHTML=t;
			resume=!resume;
	  	}
		timezone2.onclick = function () 
		{
			d.setHours(d.getHours()+2);
			var t = d.toLocaleTimeString();
			time.innerHTML=t;
		}
  }
  

