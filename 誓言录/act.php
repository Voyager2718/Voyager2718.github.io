<?php
	header("Content-Type: text/html;charset=utf-8");
	$con = mysql_connect("localhost","promises_book","****");//别忘了改密码
	mysql_query("SET NAMES uft8");
	if(!$con)
		die("数据库连接出错，错误代码：" . mysql_error()).".";
	if($_POST['type']=="insert"){
		$pms = $_POST['pms'];
		$pmsID = $_POST['pmsID'];
		$deadline = $_POST['deadline'];
		$password = $_POST['password'];
		$pmsPW = $_POST['pmsPW'];
		if(password!=="****"){//别忘了改密码
			echo "<script>alert(\"管理员密码错误！\");window.location.href =\"index.html\";</script>";
		exit(0);
		}
		$query = sprintf("INSERT INTO `promises_book`.`pms`(`PID2`,`pmsID`,`password`,`date`) VALUES ('%s','%s','%s','%s')",mysql_real_escape_string($pmsID),mysql_real_escape_string($pmsID),mysql_real_escape_string($password),mysql_real_escape_string($deadline));
		echo "<script>alert(\"成功！\");window.location.href =\"index.html\";</script>";
		exit(0);
	}
	else if($_POST['type']=="query"){
		$pmsID =$_POST["pmsID"];
		$password = $_POST["password"];
		
		if($pmsID==""||$password=="")
			echo "<p>查询失败：ID或密码为空.</p>";
			
		mysql_select_db("promises_book",$con);
		
		$query = sprintf("SELECT * FROM `pms` WHERE `PID2` = '%s', AND `password` = '%s'",mysql_real_escape_string($pmsID),mysql_real_escape_string($password));//查询
		
		$result = mysql_query($query);
		$row = mysql_fetch_array($result);
		
		if($row['PID2'] == $pmsID && $row['password']){
			echo "		<div id = \"idBox\">".$pmsID."</div>
					<div id=\"showBox\">
					".$row['pms']."
					</div>";//假设pms行是誓言内容
		}
		else{
			echo "<p>查询失败：誓言ID或誓言密码出错.</p>";
		}	
	}
?>