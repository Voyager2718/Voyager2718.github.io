<?php
	header("Content-Type: text/html;charset=utf-8");
	$con = mysql_connect("localhost","promises_book","密码");//记得将密码改回来
	mysql_query("SET NAMES uft8");
	if(!$con)
		die("数据库连接出错，错误代码：" . mysql_error()).".";
	$pmsID =$_POST["pmsID"];
	$password = $_POST["password"];
	if($pmsID==""||$password=="")
		echo "空白用户名";
	mysql_select_db("promises_book",$con);
	$query = sprintf("SEECT * FROM `pms` WHERE `PID2`='%s'");
	mysql_real_escape_string($pmsID);//参数化查询
?>