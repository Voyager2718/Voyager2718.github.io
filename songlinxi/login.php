<?php
	session_start();
	$_SESSION['login']=null;
?>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
<?php	
	$conn=mysql_connect("localhost","user0","C81DE6A93FE462DF","Love");
	if(!$conn)
	{
		echo("<script>alert('Database error(0x00000001). Please contact the admin.')</script>\n");
	}
	$username=$_POST['username'];
	$password=$_POST['password'];
	$anni=$_post['anni'];
	$sql="SELECT * FROM love where name='$username'";
	$result=mysql_query($sql);
	$row=mysql_query($result);
	if(($username!=null&&$password!=null)&&($row[0]==$username&&$row[4]==$password)){
		$_SESSION['login']=$username;
		
	}
	else{
		echo ("<script>alert('用户名或密码错误');self.location.href='http://www.songlinxi.com/login.html'</script>");
	}
?>
</head>
<body>
<p>Signing in...</p>
</body>
</html>