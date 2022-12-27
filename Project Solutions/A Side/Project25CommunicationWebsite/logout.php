<!--
Webpage Name:logout.php
Main Developer: CJ Conti
Primary Function:Lets users log out of their accounts.
-->
<?php
require("sessionstart.php");
session_unset();
header("Location: index.php");
?>
