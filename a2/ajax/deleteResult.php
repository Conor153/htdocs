<?php

$connection = mysqli_connect("localhost","root","");
mysqli_select_db($connection,"gaanfl2024");
mysqli_query($connection,"SET NAMES utf8");

$ID = $_POST['ID'];

$result = mysqli_query($connection,"DELETE FROM results WHERE id = '$ID'");
mysqli_close($connection);
?>