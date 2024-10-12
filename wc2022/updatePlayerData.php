<?php

$connection = mysqli_connect("localhost","root","");
mysqli_select_db($connection,"wc2022");
mysqli_query($connection,"SET NAMES utf8");

$ID = $_POST['ID'];
$name = $_POST['name'];
$caps = $_POST['caps'];
$goals = $_POST['goals'];
$club = $_POST['club'];

//var_dump($ID, $name, $caps, $goals, $club);

$result = mysqli_query($connection,"UPDATE players SET name = '$name', caps = '$caps', goals = '$goals', club = '$club' WHERE ID = '$ID'");
mysqli_close($connection);
?>