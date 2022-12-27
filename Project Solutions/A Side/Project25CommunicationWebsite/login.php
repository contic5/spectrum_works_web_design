<html>
<head>
    
</head>
<body>
<?php
require("db.php");
if(isset($_POST["username"])&&isset($_POST["password"]))
{
  $username=$_POST["username"];
  $password=$_POST["password"];
  $hashedpassword=md5($password);


  $query=sprintf("SELECT * FROM Users WHERE Username='%s' AND Password='%s'",$username,$hashedpassword);
  $result = mysqli_query($conn,$query) or die(mysqli_error($conn));
  $rows = mysqli_num_rows($result);
  print("<p>".$rows."</p>");
  if($rows==1)
  {
    $_SESSION["username"]=$username;
    while($row=mysqli_fetch_assoc($result))
    {
        $_SESSION["userID"]=$row["ID"];   
    }
    header("Location: index.php");
  }
}  
?>
</body>
</html>