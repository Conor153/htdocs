function nav() {
    var navOutPut = `
    <img src="images/2024.png" style="width:75px">
    <ul class="navbar-nav">|
    <li class="nav-item">
    <a href ="index.html">Routes</a>
    </li> |
    <li class="nav-item">
    <a href ="states.html">States</a>
    </li> |
    <li class="nav-item">
    <a href ="candidates.html">Candidates</a>
    </li> |
    <li class="nav-item">
    <a href ="results2024.html">Results 2024</a>
    </li> | 
    <li class="nav-item">
    <a href ="resultsEV2024.html">EV Results 2024</a>
    </li> | 
    <li class="nav-item">
    <a href ="usMap.html">Results Map </a>
    </li> |`;
    if (sessionStorage.getItem("login") == "true") {
        navOutPut += `
        <li class="nav-item">
        <a class="nav-link" href ="admin.html">Admin</a>
        </li> |
        <li class="nav-item">
        <a class="nav-link" href ="logout.html">Logout</a>
        </li> |`;
    }

    else {
        navOutPut += `<li class="nav-item">
        <a href ="login.html">Login</a> 
        </li>`;
    }
    navOutPut += `</ul>`;
    $("nav").html(navOutPut);
}

