<?php
	$value=$_GET['value'];

	print("<table border=1>");
	for($i=1;$i<=12;$i++)
	{
		print("<tr>");
		print("<td>");
		print("$value * $i = " . ($value*$i));
		print("</td>");
		print("</tr>");			
	}
	print("</table>");

?>