<html>
<head>

</head>
<body>
<h1>Communication Website</h1>
<nav>
<a href="index.php">Home</a>
<?php
require("sessionstart.php");
if(isset($_SESSION["username"]))
{
?>
<a href="viewfavorites.php">View Favorites</a>
<a href="logout.php">Logout</a>
<?php
}
else
{?>
<a href="createaccount.php">Create Account</a>
<a href="logout.php">Login</a>
<?php
}
?>
</nav>   

</body>
</html>