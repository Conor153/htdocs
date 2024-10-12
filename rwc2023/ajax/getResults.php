<?php

$connection = mysqli_connect("localhost","root","");
mysqli_select_db($connection,"rwc2023");
$result = mysqli_query($connection,"SELECT * FROM results ORDER BY 'date', 'time'"); 


$rs = array();
while($rs[] = mysqli_fetch_assoc($result)) {
}
mysqli_close($connection);
unset($rs[count($rs)-1]);

print("{\"results\":"); //
print(json_encode($rs, JSON_NUMERIC_CHECK)); //
print("}"); //
?>