<?php
	function trans($file){
		$file = str_replace("&","&amp;",$file);
		$file = str_replace("<","&lt;",$file);
		$file = str_replace(">","&gt;",$file);
		$file = str_replace("\"","&quot;",$file);
		return $file;
	}

	function b_trans($file){
		$file = str_replace("&amp;","&",$file);
		$file = str_replace("&lt;","<",$file);
		$file = str_replace("&gt;",">",$file);
		$file = str_replace("&quot;","\"",$file);
		return $file;
	}
?>