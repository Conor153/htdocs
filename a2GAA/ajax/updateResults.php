<?php

$connection = mysqli_connect("localhost","root","");
mysqli_select_db($connection,"gaanfl2024");
mysqli_query($connection,"SET NAMES utf8");

$ID = $_POST['ID'];
$team1Score = $_POST['team1Score'];
$team1Goals = $_POST['team1Goals'];
$team1Points = $_POST['team1Points'];
$team2Score = $_POST['team2Score'];
$team2Goals = $_POST['team2Goals'];
$team2Points = $_POST['team2Points'];


$result = mysqli_query($connection,"UPDATE results SET team1Score = '$team1Score', team1Goals = '$team1Goals', team1Points = '$team1Points', team2Score = '$team2Score' , team2Goals = '$team2Goals' , team2Points = '$team2Points' WHERE ID = '$ID'");
mysqli_close($connection);
?>