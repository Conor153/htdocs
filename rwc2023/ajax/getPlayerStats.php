<?php
$connection = mysqli_connect("localhost","root","");
mysqli_select_db($connection,"rwc2023");
$result1 = mysqli_query($connection,"SELECT * FROM player_points");

$result2 = mysqli_query($connection,"SELECT * FROM player_tackles");



$rs1 = array();
while($rs1[] = mysqli_fetch_assoc($result1)) {
}
$rs2 = array();
while($rs2[] = mysqli_fetch_assoc($result2)) {
}
mysqli_close($connection);
unset($rs1[count($rs)-1]);  //removes a null value
unset($rs2[count($rs)-1]);  //removes a null value

print("{\"points\":"); //

print(json_encode($rs1, JSON_NUMERIC_CHECK)); //

print("{\"tackles\":"); //
print(json_encode($rs2, JSON_NUMERIC_CHECK)); //
print("}"); //
?>