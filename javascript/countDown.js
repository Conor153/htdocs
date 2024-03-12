// two global variables
var secondsRemaining;
var intervalHandle;
var resume = false;
var maxTime;
// as soon as the page is loaded...
window.onload =  function () {

	// create input text box and give it an id of "minutes"
	var inputMinutes = document.createElement("input");
	inputMinutes.setAttribute("id", "minutes");
	inputMinutes.setAttribute("type", "text");

	// create a button
	var startButton = document.createElement("input");
	startButton.setAttribute("type", "button");
	startButton.setAttribute("value", "Start Countdown");
	startButton.onclick = function () {
		if(inputMinutes.value<=10 && inputMinutes.value>=1)
		{
			startCountdown();
		}
		if(inputMinutes.value>10)
		{
			alert("Cannot have a countdown greater than 10 minutes");
		}
		if(inputMinutes.value<1)
		{
			alert("Cannot have a countdown less than 1 minute");
		}
	}

	// add to the DOM, to the div called "inputArea"
	document.getElementById("inputArea").appendChild(inputMinutes);
	document.getElementById("inputArea").appendChild(startButton);
}

function startCountdown()
{
	// get contents of the "minutes" text box
	var minutes = document.getElementById("minutes").value;
	// check if not a number
	if (isNaN(minutes)) {
	  alert("Please enter a number!");
	  return;
	}
	// how many seconds?
	secondsRemaining =  minutes * 60;
	maxTime = secondsRemaining;
	// every second, call the tick function
	intervalHandle = setInterval(tick, 1000);
	// hide the form
	document.getElementById("inputArea").style.display = "none";
	//Add pause button for countdown
	var pauseButton = document.createElement("input");
	pauseButton.setAttribute("type", "button");
	pauseButton.setAttribute("value", "Pause Countdown");
	document.getElementById("pauseArea").appendChild(pauseButton);
	//Pause button function
	pauseButton.onclick = function () {

		if(resume==false){
			clearInterval(intervalHandle);
			// resume=false;
			pauseButton.setAttribute("value", "Restart Countdown");
		}
		if(resume==true)
		{
			pauseButton.setAttribute("value", "Pause Countdown");
			intervalHandle = setInterval(tick, 1000);
		}
		resume = !resume;
	}
}


function tick()
{
	// get the h1
	var timeDisplay = document.getElementById("time");

	// turn seconds into mm:ss
	var min = Math.floor(secondsRemaining / 60);
	var sec = secondsRemaining - (min * 60);
	// add a leading zero (as a string value) if seconds less than 10
	if (sec < 10) {
	  sec = "0" + sec;
	}
	//Change text to red when time left is 10 seconds
	if (min == 0 && sec < 11) {
		timeDisplay.setAttribute("style","color: red");
	  }
	else
	{
		timeDisplay.setAttribute("style","color: black");
	}
	// concatenate with colon
	var message = min + ":" + sec;
	// now change the display
	timeDisplay.innerHTML = message;

	// stop if down to zero
	if (secondsRemaining === 0) {
	  alert("Done!");
	  clearInterval(intervalHandle);
	  resetPage();
	  document.getElementById("pauseArea").style.display = "none";
	}
	if (secondsRemaining == 0 && secondsRemaining < maxTime) {
		document.getElementById("pauseArea").style.display = "none";
	  }

	// subtract from seconds remaining
	secondsRemaining--;
}

function resetPage()
{
	document.getElementById("inputArea").style.display = "block";
}