var loggedIn = false;
function nav()
{
    var nav = document.getElementById("nav");
    var navOutPut =`<img src="icons/logo.png">
    <a href ="venues.html">Venues</a> |
    <a href ="teams.html">Teams</a> |
    <a href ="players.html">Players</a> |
    <a href ="results.html">Results</a> |
    <a href ="resultsByDate.html">Results by Date</a> |
    <a href ="pools.html">Pools</a> |
    <a href ="playerStats.html">Player Stats</a> | `;
    
    
    if(loggedIn == true)
    {
        navOutPut +=`<a href="resultsAdmin.html">Results Admin</a> |
        <a href="teams.html" onclick="logout()">Logout</a> |`;
    }
    else
    {
        navOutPut += `<a href ="login.html">Login</a> |`;
        
    }
    nav.innerHTML  = nav.innerHTML + navOutPut;
}

function logout() 
{
    loggedIn=false;
    nav();
}

function setLogin(value)
{
    loggedIn=value;
    nav();
}
