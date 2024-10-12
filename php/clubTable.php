<!doctype html>
<html>
<?php
$connection = mysqli_connect("localhost","root","");
mysqli_select_db($connection,"footballDB");
$result = mysqli_query($connection,"SELECT * FROM club");
print("<table>");
print("<tr>");
print("<th>");
print("Football Clubs");
print("</th>");
print("<th>");
print("Football Grounds");
print("</tr>");
print("</th>");
while($row = mysqli_fetch_array($result))
{
    print("<tr>");
    print("<td>");
    print($row["name"]);
    print("</td>");
    print("<td>");
    print($row["ground"]);
    print("</td>");
    print("</tr>");
}
print("</table>");
mysqli_close($connection);

?>
</html>