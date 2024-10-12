<?php

// no code to add!  This works.

$connection = mysqli_connect("localhost","root","");
mysqli_select_db($connection,"usersdb");

$company = $_GET['company'];

mysqli_query($connection,"SET NAMES utf8");

if($company == 'all')
    $result = mysqli_query($connection,"SELECT * FROM users ORDER BY id"); 
else
    $result = mysqli_query($connection,"SELECT * FROM users WHERE company='$company' ORDER BY id"); 

$rs = array();
while($rs[] = mysqli_fetch_assoc($result)) {
}
mysqli_close($connection);
unset($rs[count($rs)-1]);  //removes a null value

print("{\"users\":"); //
print(json_encode($rs, JSON_NUMERIC_CHECK)); //
print("}"); //
?>