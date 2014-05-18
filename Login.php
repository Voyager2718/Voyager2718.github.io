<?php
$username=$_POST['username'];
$password=$_POST['password'];
if($username&&$password)
{
$connect=mysql_connect("localhost","root","")or die("Couldn't connect to the database!Err001");
mysql_select_db("phplogin)or die("Database no found!Err002.");
}
else
die("Please enter an username and a password!Err003 ");
?>