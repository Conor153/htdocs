<?php
$artist_id=$_GET['artist_id'];

$connection = mysqli_connect("localhost","root","");
mysqli_select_db($connection,"music");
$result = mysqli_query($connection,"SELECT * FROM album WHERE artist_id = $artist_id"); //

$rs = array();
while($rs[] = mysqli_fetch_assoc($result)) {
}
mysqli_close($connection);
unset($rs[count($rs)-1]);  //removes a null value

print("{\"clubs\":"); //
print(json_encode($rs, JSON_NUMERIC_CHECK)); //
print("}"); //
?>