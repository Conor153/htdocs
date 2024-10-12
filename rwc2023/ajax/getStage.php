<?php
//$stage=$_GET['stage'];

$connection = mysqli_connect("localhost","root","");
mysqli_select_db($connection,"rwc2023");
$result = mysqli_query($connection,"SELECT DISTINCT stage FROM results"); 
//stage = $stage

$rs = array();
while($rs[] = mysqli_fetch_assoc($result)) {
}
mysqli_close($connection);
unset($rs[count($rs)-1]);  //removes a null value

print("{\"stage\":"); //
print(json_encode($rs, JSON_NUMERIC_CHECK)); //
print("}"); //
?>