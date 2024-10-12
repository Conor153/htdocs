<?php
$connection = mysqli_connect("localhost","root","");
mysqli_select_db($connection,"rwc2023");
$result = mysqli_query($connection,"SELECT players.id AS playerid, players.name, teams.name AS teamsname, teams.id FROM players, teams WHERE players.team_id = teams.id ORDER BY teamsname,players.name ;");

$rs = array();
while($rs[] = mysqli_fetch_assoc($result)) {
}
mysqli_close($connection);
unset($rs[count($rs)-1]);  //removes a null value

print("{\"players\":"); //
print(json_encode($rs, JSON_NUMERIC_CHECK)); //
print("}"); //
?>