<?php
$connection = mysqli_connect("localhost","root","");
mysqli_select_db($connection,"rwc2023");

$match_id = $_GET['match_id'];
$team1_score = $_GET['team1_score'];
$team2_score = $_GET['team2_score'];
var_dump($match_id, $team1_score, $team2_score);
$result = mysqli_query($connection,"UPDATE results SET team1_score = '$team1_score', team2_score = '$team2_score' WHERE match_id = '$match_id'");
mysqli_close($connection);
?>