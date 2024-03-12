<!doctype html>
<html>
<?php
$connection = mysqli_connect("localhost","root","");
mysqli_select_db($connection,"footballDB");
$result = mysqli_query($connection,"SELECT * FROM club");
print("<ul>");
while($row = mysqli_fetch_array($result))
{
    print("<li>");
    print($row["name"]. " Stadium: " . $row["ground"]);
    print("</li>");
}
print("</ul>");
mysqli_close($connection);

?>
</html>