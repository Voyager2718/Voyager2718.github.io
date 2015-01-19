// JavaScript Document For Write In Blog
//author:lifeng
function blogthis(){//写进blog表单提交
	var blogid = document.getElementById("blog");
	var blogform = document.createElement("form");
	var blogtitle = document.createElement("input");
	var blogcontent = document.createElement("input");
	
	blogform.method = "post";
	blogform.target = "_blank";
	blogform.style.display = "none";
	blogform.action = "http://blog.dayoo.com/admin/article.php?action=write";
	
	blogtitle.name = "title";
	blogcontent.name = "content";
	
	blogtitle.value = document.getElementsByTagName("h1")[0].innerHTML;	
	if (document.getElementById("digest")) {//如果有摘要
		blogcontent.value = document.getElementById("digest").innerHTML;
	} else {
		blogcontent.value = blogtitle.value;
	}
	
	blogform.appendChild(blogtitle);
	blogform.appendChild(blogcontent);	
	blogid.appendChild(blogform);	
	blogform.submit();
}