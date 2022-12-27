<html>
<head>
<link href="mystyle.css" type="text/css" rel="stylesheet">
</head>
<body>
<?php
require("header.php");
require("sessionstart.php");
require("db.php");  

if(isset($_POST["username"]))
{
    $username=$_POST["username"];
    $password=$_POST["password"];
    $_SESSION["username"]=$username;
    $query=sprintf("INSERT INTO Users(Username,Password)"
      ."VALUES('%s','%s')",$username,$password);
    $result=mysqli_query($conn,$query) or die(mysqli_error($conn));
    
    $query=sprintf("SELECT * FROM Users ORDER BY ID DESC");
    
    $result=mysqli_query($conn,$query) or die(mysqli_error($conn));
    while($row=mysqli_fetch_assoc($result))
    {
        $_SESSION["userID"]=$row["ID"]+1;   
    }
}
?>
<h2>Create Account</h2>
<form method="post">
Username<input name="username" required> 
Password<input name="password" type=password required min=8>
<button type="submit">Create Account</button>
</form>
</body>
</html>