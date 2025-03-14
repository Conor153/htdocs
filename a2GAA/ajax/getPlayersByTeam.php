<?php

$ID=$_POST['ID'];

$connection = mysqli_connect("localhost","root","");
mysqli_select_db($connection,"gaanfl2024");

mysqli_query($connection,"SET NAMES utf8");

if($ID==0)
    $result = mysqli_query($connection,"SELECT players.name, players.squadNumber, players.age, players.matches, teams.name AS teamname FROM players,teams WHERE players.teamID = teams.id ORDER BY teamname, players.name, squadNumber"); 
else
    $result = mysqli_query($connection,"SELECT players.name, players.squadNumber, players.age, players.matches, teams.name AS teamname FROM players, teams WHERE players.teamID=$ID && players.teamID = teams.id ORDER BY teamname, players.name"); 

$rs = array();
while($rs[] = mysqli_fetch_assoc($result)) {
}
mysqli_close($connection);
unset($rs[count($rs)-1]);  //removes a null value

print("{\"players\":"); //
print(json_encode($rs, JSON_NUMERIC_CHECK)); //
print("}"); //
?>