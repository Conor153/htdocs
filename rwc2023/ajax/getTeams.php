<?php
$connection = mysqli_connect("localhost","root","");
mysqli_select_db($connection,"rwc2023");
$result = mysqli_query($connection,"SELECT * FROM teams, pools WHERE pools.team_name=teams.name ORDER BY team_name");

$rs = array();
while($rs[] = mysqli_fetch_assoc($result)) {
}
mysqli_close($connection);
unset($rs[count($rs)-1]);  //removes a null value

print("{\"teams\":"); //
print(json_encode($rs, JSON_NUMERIC_CHECK)); //
print("}"); //
// $connection = mysqli_connect("localhost", "root", "");
// mysqli_select_db($connection, "rwc2023");

// // Check if a sorting parameter is provided, default to sorting by name
// $sortColumn = isset($_GET['sort']) ? $_GET['sort'] : 'name';

// // Use a prepared statement to prevent SQL injection
// $query = "SELECT * FROM teams, pools WHERE pools.team_name = teams.name ORDER BY $sortColumn";
// $result = mysqli_query($connection, $query);

// $rs = array();
// while ($rs[] = mysqli_fetch_assoc($result)) {
// }
// mysqli_close($connection);
// unset($rs[count($rs) - 1]);  // removes a null value

// print("{\"teams\":");
// print(json_encode($rs, JSON_NUMERIC_CHECK));
// print("}");
?>


