<!doctype html>
<html>
<?php
$connection = mysqli_connect("localhost","root","");
mysqli_select_db($connection,"footballDB");
$result = mysqli_query($connection,"SELECT * FROM club");
print("<select>");
while($row = mysqli_fetch_array($result))
{
    print("<option>");
    print($row["name"]. " Stadium:  " . $row["ground"]);
    print("</option>");
}
print("</select>");
mysqli_close($connection);

?>
</html>