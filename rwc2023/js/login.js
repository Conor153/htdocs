var loggedIn = false;
window.onload=function()
{
    nav();
    //getAjaxData();
    var output = document.getElementById("myDiv");
    
    output = `<form id="formId" method="post" action="resultsAdmin.html">`;//      
    output += `<table id="myTable" border=1>`;    
    output += `<td><label for="emailId">Username</label></td>`;
    output += `<td><input id="emailId" name="email" type="text" autocomplete="off"/></td>`;
    output += `</tr>`;
    output += `<tr>`;
    output += `<td><label for="passwordId">Password</label></td>`;
    output += `<td><input id="passwordId" name="password" type="password" autocomplete="off"/></td>`;
    output += `</tr>`;
    output += `<tr>`;
    output += `<td></td>`;
    output += `<td id="error"></td>`;
    output += `</tr>`;
    output += `<tr>`;
    output += `<td></td>`;
    output += `<td><input value="Login" type="submit" autocomplete="off"/></td>`;
    output += `</tr>`;
    output += `</table>`;
    output += `</form>`;
    document.getElementById("myDiv").innerHTML = output;
    
    document.getElementById("formId").onsubmit=function()
    {
        var email = document.getElementById("emailId");
        var password = document.getElementById("passwordId");
        var error = document.getElementById("error");
        //Username must contain domain @atu.ie
        //Password must contain 6 characters
		if(email.value=="" || email.value.indexOf("@")==-1 || email.value.indexOf("@atu.ie")==-1 || password.value.length<6) 
        {   
            error.innerHTML="Invalid Credentials"
		    return false; //NB stops form submission  
		}
		else
        {
            resultsAdminLogin(true);
            resulstLogin(true);
            playersLogin(true);
            playerStatsLogin(true)
            teamsLogin(true);
            poolsLogin(true);
            resulstByDateLogin(true);
            venuesLogin(true);
            return true; 
                                        
		}
	}


}