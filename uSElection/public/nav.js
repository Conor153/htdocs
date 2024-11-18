function nav() {
    var navOutPut = `
    <ul class="navbar-nav">
    <li class="nav-item">
    <a class="nav-link text-secondary" href ="routes.html">Routes</a>
    </li>
    <li class="nav-item">
    <a class="nav-link text-secondary" href ="states.html">States</a>
    </li>
    <li class="nav-item">
    <a class="nav-link text-secondary" href ="candidates.html">Candidates</a>
    </li>
    <li class="nav-item">
    <a class="nav-link text-secondary" href ="results2024.html">Results 2024</a>
    </li>
    <li class="nav-item">
    <a class="nav-link text-secondary" href ="resultsEV2024.html">EV Results 2024</a>
    </li>
    <li class="nav-item">
    <a class="nav-link text-secondary" href ="resultsMap.html">Results Map</a>
    </li>`;
    if (sessionStorage.getItem("login") == "true") {
        navOutPut += `
        <li class="nav-item">
        <a class="nav-link text-secondary" href ="admin.html">Admin</a>
        </li>
        <li class="nav-item">
        <a class="nav-link text-secondary" href ="logout.html">Logout</a>
        </li>`;
    }

    else {
        navOutPut += `<li class="nav-item">
        <a class="nav-link text-secondary" href ="login.html">Login</a>
        </li>`;
    }
    navOutPut += `</ul>`;
    $("nav").html(navOutPut);
}

