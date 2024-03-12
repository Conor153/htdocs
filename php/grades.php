<html>
<body>

<?php

$mark=-1;

if($mark>=70 && $mark<100)
{
    print("Distinction");
}
else if($mark>=60 && $mark<=69)
{
    print("Merit 1");
}
else if($mark>=50 && $mark<=59)
{
    print("Merit 2");
}
else if($mark>=40 && $mark<=49)
{
    print("Pass");
}
else if($mark>=0 && $mark<=38)
{
    print("Fail");
}
else if($mark<0 || $mark>100)
{
    print("invalid");
}
?>

</body>
</html>
