window.onload = function(){
	document.getElementById("myFormId").onsubmit=function()  {
		// check email is provided
		var email = document.getElementById("emailId");
		var password = document.getElementById("passwordId");
		if(email.value=="") {
		   document.getElementById("errorMsg").innerHTML=
				"You MUST provide an email address";  //
		   return false; //NB stops form submission  
		}  
		//Check that email is valid
		if(email.value.indexOf("@")==-1) {
			document.getElementById("errorMsg").innerHTML=
				 "You MUST provide a valid email address with @";  //
			return false; //NB stops form submission  
		 }
		 //Email must contain @lyit.ie domain
		 if(email.value.indexOf("@lyit.ie")==-1) {
			document.getElementById("errorMsg").innerHTML=
				 "You MUST provide an email address that contains @lyit.ie";  //
				 document.getElementById("errorMsg").style.color = "red";
			return false; //NB stops form submission  
		 }
		 //Password must be provided
		 if(password.value=="") {
			document.getElementById("errorMsg").innerHTML=
				 "You MUST provide a password";  //
			return false; //NB stops form submission  
		 }
		 //Password must be longer than 6 characters
		 if(password.value.length<6) {
			document.getElementById("errorMsg").innerHTML=
				 "You MUST provide a password with at least 6 characters";
				 document.getElementById("errorMsg").style.color = "red";
			 return false; //NB stops form submission  
		 }
		else{
		   document.getElementById("errorMsg").innerHTML=""; //
		   return true;                               
		}
	 }
}
