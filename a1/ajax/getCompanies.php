<?php
$connection = mysqli_connect("localhost","root","");
mysqli_select_db($connection,"usersDB");

mysqli_query($connection,"SET NAMES utf8");
$result = mysqli_query($connection,"????????????????");  // add your code here

$rs = array();
while($rs[] = mysqli_fetch_assoc($result)) {
}
mysqli_close($connection);
unset($rs[count($rs)-1]);  //removes a null value

print("{\"companies\":"); //
print(json_encode($rs, JSON_NUMERIC_CHECK)); //
print("}"); //
?>