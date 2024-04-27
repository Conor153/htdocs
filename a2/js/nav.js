function nav() {
    var navOutPut = `
    <ul class="navbar-nav">
    <li class="nav-item">
    <a class="nav-link text-secondary" href ="index.html">JSON Data</a>
    </li>
    <li class="nav-item">
    <a class="nav-link text-secondary" href ="teams.html">Teams</a>
    </li>
    <li class="nav-item">
    <a class="nav-link text-secondary" href ="players.html">Players</a>
    </li>
    <li class="nav-item">
    <a class="nav-link text-secondary" href ="results.html">Results</a>
    </li>
    <li class="nav-item">
    <a class="nav-link text-secondary" href ="tables.html">Tables</a>
    </li>
    <li class="nav-item">
    <a class="nav-link text-secondary" href ="tables.html">Stats</a>
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

