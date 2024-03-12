<!doctype html>
<html>
<?php
$connection = mysqli_connect("localhost","root","");
mysqli_select_db($connection,"music");
$result = mysqli_query($connection,"SELECT * FROM artist");
while($row = mysqli_fetch_array($result))
{
    print($row["artist_name"]);
    print("<br>");
}
mysqli_close($connection);

?>
</html>