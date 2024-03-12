<?php

$ID=$_POST['ID'];

$connection = mysqli_connect("localhost","root","");
mysqli_select_db($connection,"wc2022");

mysqli_query($connection,"SET NAMES utf8");

if($ID==0)
    $result = mysqli_query($connection,"SELECT * FROM players ORDER BY teamID, squadNumber"); 
else
    $result = mysqli_query($connection,"SELECT * FROM players WHERE teamID=$ID ORDER BY teamID, squadNumber"); 

$rs = array();
while($rs[] = mysqli_fetch_assoc($result)) {
}
mysqli_close($connection);
unset($rs[count($rs)-1]);  //removes a null value

print("{\"players\":"); //
print(json_encode($rs, JSON_NUMERIC_CHECK)); //
print("}"); //
?>