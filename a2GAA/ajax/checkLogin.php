<?php

$email=$_POST['email'];
$password=$_POST['password'];

$connection = mysqli_connect("localhost","root","");
mysqli_select_db($connection,"gaanfl2024");
mysqli_query($connection,"SET NAMES utf8");


$result = mysqli_query($connection,"SELECT * FROM users WHERE email='$email' AND password='$password'"); 

$rs = array();
while($rs[] = mysqli_fetch_assoc($result)) {
}
mysqli_close($connection);
unset($rs[count($rs)-1]);  //removes a null value

print("{\"login\":"); //
print(json_encode($rs, JSON_NUMERIC_CHECK)); //
print("}"); //
?>