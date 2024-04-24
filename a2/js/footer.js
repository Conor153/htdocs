function footer()
{
    var footerOutPut = `
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
    </ul>`;
    $("nav").html(navOutPut);
}