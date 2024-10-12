<?php
$connection = mysqli_connect("localhost","root","");
mysqli_select_db($connection,"rwc2023");
$result = mysqli_query($connection,"SELECT pools.position, pools.pool, pools.team_name, pools.played, pools.w, pools.d, pools.l, pools.pf, pools.pa, pools.bonus, pools.pd, pools.pts, teams.id FROM pools, teams WHERE pools.team_name=teams.name ORDER BY pools.pool, pools.pts DESC, pools.pd DESC");

$rs = array();
while($rs[] = mysqli_fetch_assoc($result)) {
}
mysqli_close($connection);
unset($rs[count($rs)-1]);  //removes a null value

print("{\"pools\":"); //
print(json_encode($rs, JSON_NUMERIC_CHECK)); //
print("}"); //
?>