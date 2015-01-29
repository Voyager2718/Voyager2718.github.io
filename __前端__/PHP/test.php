<!--<script>
	function pushcode(){
		var xmlhttp;
		xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange=function()
		{
			if (xmlhttp.readyState==4 && xmlhttp.status==200){
				document.getElementById("ta").value = xmlhttp.responseText;
			}
		}
		xmlhttp.open("POST","test.php",true);
		xmlhttp.send();
	}
</script>
-->

<form action = "pt.php" method = "post">
<?php
	include 'trans.php';
	$path = "test.php";
	header("Content-Type: text/html;charset=utf-8"); 
	if($_GET['m']=="pst"){
		if(isset($_POST['textarea'])){
			$file2 = $_POST['textarea'];
			$file2 = b_trans($file2);
			$fp = fopen($path,"w") or die("Unable to open file!");
			fwrite($fp,$file2);
			fclose($fp);
		}
	}
	if($_GET['m']=="v"){
		$fp = fopen($path,"r") or die("Unable to open file!");
		$file = fread($fp,filesize($path));
		$file = trans($file);
		echo "	<textarea name = \"textarea\" style =\"resize:none; height: 500px; width: 800px;\">\n".$file."\n	</textarea>";
		fclose($fp);
	}
	//23333ê
?>
	<input type = "button" value = "Submit">
</form>